export async function fetchData(url:string) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function startRaid(url: string) {
    try {
        const response = await fetch(url, {
            method: 'POST'
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

export async function fetchStat(url: string) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}


export async function fetchFlag(url: string) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}


export async function flagStart(url: string) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}


export async function flagStop(url: string) {
    try {
        const response = await fetch(url);

    } catch (error) {
        console.error('Error downloading file:', error);
    }
}

