const express = require('express');
const port = 3005;
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const pool = require("./db");
const {RecaptchaEnterpriseServiceClient} = require('@google-cloud/recaptcha-enterprise');

const fs = require('node:fs');

app.use(cors(/*{
    origin: 'http://10.244.0.108/'
}*/));
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));


/*app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});*/


const calculateMinutes = (EntryTime, ExitTime) => {
    const entry = new Date(EntryTime);
    const exit = new Date(ExitTime);
    
    const diffInMilliseconds = exit.getTime() - entry.getTime();
    const diffInMinutes = diffInMilliseconds / (1000 * 60);

    return diffInMinutes;
};




app.get("/api/getDataDesktop", async (req, res) => {
    try {
        const data = await pool.query('SELECT public."Players".*, public."PlayerRaid"."DeathNumber" FROM public."PlayerRaid" INNER JOIN public."Players" ON (public."Players"."CardId" = public."PlayerRaid"."CardId" AND public."Players"."RaidId" = public."PlayerRaid"."RaidId");');

        
       
        const readyData = (data.rows).map((person, index) => ({
            ...person,
            Alias: handlerDesktop(person.Alias),
            EntryTime: (person.EntryTime==null) ? "--:--" : new Date(person.EntryTime).toLocaleTimeString(),
            ExitTime: (person.ExitTime==null) ? "--:--" : new Date(person.ExitTime).toLocaleTimeString(),
            minutes: (person.ExitTime==null || person.EntryTime==null) ? "--:--" : calculateMinutes(person.EntryTime, person.ExitTime),
        }))
        res.setHeader("Access-Control-Allow-Origin", "*");

        res.send(readyData);
    } catch (err) {
        res.status(500).send('Server error');
    }
})


app.get("/api/getDataMobile", async (req, res) => {
    try {
        const data = await pool.query('SELECT public."Players".*, public."PlayerRaid"."DeathNumber" FROM public."PlayerRaid" INNER JOIN public."Players" ON (public."Players"."CardId" = public."PlayerRaid"."CardId" AND public."Players"."RaidId" = public."PlayerRaid"."RaidId");');

        
       
        const readyData = (data.rows).map((person, index) => ({
            ...person,
            Alias: handlerMobile(person.Alias),
            EntryTime: (person.EntryTime==null) ? "--:--" : new Date(person.EntryTime).toLocaleTimeString(),
            ExitTime: (person.ExitTime==null) ? "--:--" : new Date(person.ExitTime).toLocaleTimeString(),
            minutes: (person.ExitTime==null || person.EntryTime==null) ? "--:--" : calculateMinutes(person.EntryTime, person.ExitTime),
        }))
        res.setHeader("Access-Control-Allow-Origin", "*");

        res.send(readyData);
    } catch (err) {
        res.status(500).send('Server error');
    }
})



app.get("/api/getFlagStatus", async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM public."PointResult";');

        res.setHeader("Access-Control-Allow-Origin", "*");

     
        res.send(data.rows);
    } catch (err) {
        res.status(500).send('Server error');
    }
})

app.get("/api/FlagStart", async (req, res) => { 
    try { 
        await pool.query('TRUNCATE TABLE public."CardReading";'); 
        res.setHeader("Access-Control-Allow-Origin", "*"); 
        
    } catch (err) { 
        res.status(500).send('Server error'); 
    } 
})

app.get("/api/FlagStop", async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM public."CardReading";');

        res.setHeader("Access-Control-Allow-Origin", "*");
        const textData = JSON.stringify(data.rows);

        res.send(textData);

        const timestamp = Date.now(); // Получаем текущее время в миллисекундах
        const filename = `./logs/logs_${timestamp}.txt`; // Формируем уникальное имя файла

        fs.open(filename, 'w', (err, fd) => {
            if (err) {
              console.error(err);
            } else {
              fs.write(fd, textData, (err) => {
                  if (err) {
                      console.error(err);
                  } else {
                      console.log('Data written to file');
                  }
                  fs.close(fd, (err) => {
                      if (err) {
                          console.error(err);
                      }
                  });
              });
            }
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
});



app.post("/api/sendFormData", async (req, res) => {
    try {
        const { email, name, topic, who, more } = req.body;

        res.setHeader("Access-Control-Allow-Origin", "*");

        const textData = `
            Почта: ${email}
            Имя: ${name}
            Тема: ${topic}
            Кто обращается: ${who}
            Дополнительно: ${more}
        `;

        const timestamp = Date.now(); // Get current time in milliseconds
        const filename = `./forms/form_${timestamp}.txt`; // Generate unique file name

        fs.open(filename, 'w', (err, fd) => {
            if (err) {
                console.error(err);
            } else {
                fs.write(fd, textData, (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('Data written to file');
                    }
                    fs.close(fd, (err) => {
                        if (err) {
                            console.error(err);
                        }
                    });
                });
            }
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
});



app.get("/api/playersStat", async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM public."Players";');


        let countAll = 0;
        const playerCount = (data.rows).map((person) => ({
            alive: (person.Status!==null) ? (countAll+=1) : null
        }));

        let count = 0;
        const alivePlayers = (data.rows).map((person) => ({
            alive: (person.Status===false) ? (count+=1) : null
        }));
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
		res.setHeader("Access-Control-Allow-Origin", "*");
        res.json({ playerCount: countAll, alivePlayers: count });
    } catch (err) {
        res.status(500).send('Server error');
    }
});

app.get("/api/getTimings", async (req, res) => {
    try {
        const player_data = await pool.query('SELECT * FROM public."Players";');

        const playerCount = data.rowCount;

        let count = 0;
        const alivePlayers = (data.rows).map((person) => ({
            alive: (!person.Status) ? (count+=1) : null
        }));
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        res.json({ playerCount, alivePlayers: count });
    } catch (err) {
        res.status(500).send('Server error');
    }
});



const handlerMobile = (data) => {
    if (data.length > 12) {
        if (data[12] === " ") return data.slice(0, 12) + "..."
        return data.slice(0, 13) + "..."
    }
    return data;
}

const handlerDesktop = (data) => {
    if (data.length > 20) {
        if (data[20] === " ") return data.slice(0, 20) + "..."
        return data.slice(0, 21) + "..."
    }
    return data;
}

app.post("/api/startRaid", async (req, res) => {
    try {
        const currentTime = new Date();
        const duration = 45; 
        const finishTime = new Date(currentTime.getTime() + duration * 60000);

        const newRaid = await pool.query('INSERT INTO public."Raid"("Start", "Finish", "IsActive", "Duration") VALUES($1, $2, $3, $4) RETURNING *', [currentTime, finishTime, true, duration]);
       
        const raidId = newRaid.rows[0].Id;
        await pool.query('UPDATE public."Players" SET "RaidId" = $1 WHERE "Status" IS NOT NULL', [raidId]);
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        res.json(newRaid.rows[0]);
    } catch (err) {
        res.status(500).send('Server error');
    }

});



  
  app.listen(3000, () => {
    console.log('Server running on port 3005z');
  });
  





const http = require('http').createServer(app);


// Start the server 
const server = http.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
});


