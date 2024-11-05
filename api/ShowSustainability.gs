// ShowSustainability.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbzfol5uizvouEfPVmLNHa-9b8h3RpuHEQ6afIUO6x8mLGoFxONx8cQruQI90UEZWu6d/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(req.body),
            });

            const result = await response.json();
            res.status(200).json(result);
        } catch (error) {
            console.error('Error occurred:', error);
            res.status(500).json({ success: false, message: 'Server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
