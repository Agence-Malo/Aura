export async function addEmail(email:string) {
    const response = await fetch("/api/email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    })

    if (!response.ok) {
        throw new Error("Erreur lors de l'ajout de l'email")
    }

    return response.json()
}