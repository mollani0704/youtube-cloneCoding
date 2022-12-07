class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
    }

    async mostPopular() {
        try {
            const response = await fetch(
                `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
                this.getRequestOptions,
            );
            return await response.json();
        } catch (error) {
            return console.log('error', error);
        }
    }

    async search(name) {
        try {
            const response = await fetch(
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${name}&type=video&key=${this.key}`,
                this.getRequestOptions,
            );
            return await response.json();
        } catch (error) {
            return console.log('error', error);
        }
    }
}

export default Youtube;
