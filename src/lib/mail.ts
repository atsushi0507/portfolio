type MailType = {
    name: string;
    email: string;
    category: string;
    message: string;
};

export const sendContactForm = async ({name, email, category, message}: MailType) => {
    const baseURL = "https://asia-northeast1-blog-99583.cloudfunctions.net/api";
    const response = await fetch(`${baseURL}/send-email`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            category,
            message
        })
    });

    if (response.ok) {
        console.log("Contact form submitted successfully");
    } else {
        console.error("Error submitting contact form");
    }
};
