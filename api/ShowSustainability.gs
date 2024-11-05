export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbxy7MEP5oNKJ-1pDDhrXeJzOzjphZPPPD-l2kD-FN_D_MUPQB4W8HQ7JU3cWUY3MnRj7A/exec', {
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
