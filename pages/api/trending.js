const TikTokScraper = require('tiktok-scraper');
export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  (async () => {
    try {
        const posts = await TikTokScraper.trend('', {
            number: 100,
            // sessionList: ['sid_tt=58ba9e34431774703d3c34e60d584475;']
        });
        res.send(JSON.stringify(posts))
        // res.send(JSON.stringify({
        //     collector
        // }))
    } catch (error) {
        console.log(error);
    }
})();
}
