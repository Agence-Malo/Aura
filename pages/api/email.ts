import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../lib/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { email } = req.body

        if (!email || typeof email !== "string") {
            return res.status(400).json({ error: "Email invalide" })
        }

        try {
            // Vérifier si l'email existe déjà en base
            const existingEmail = await prisma.email.findUnique({
                where: { email },
            })

            if (existingEmail) {
                return res.status(409).json({ error: "Cet email est déjà enregistré" }) // 409 = Conflict
            }

            const newEmail = await prisma.email.create({
                data: { email },
            })
            return res.status(201).json(newEmail)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: "Erreur lors de l'ajout de l'email" })
        }
    }

    return res.status(405).json({ message: "Méthode non autorisée" })
}
