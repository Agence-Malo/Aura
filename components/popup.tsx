import React, {useState} from "react"
import {X} from "lucide-react";

interface PopupProps {
    onClose: () => void
    onConfirm?: () => void // Optionnel : bouton d'action supplémentaire
}

const Popup: React.FC<PopupProps> = ({onClose, onConfirm }) => {
    const [buttonText, setButtonText] = useState("SHARE WITH A FRIEND")

    const copyToClipboard = async () => {
        const link = "#";
        try {
            await navigator.clipboard.writeText(link);
            // Mettre à jour l'état pour changer le texte du bouton
            setButtonText("Link copied!");
        } catch (error) {
            alert("Erreur lors de la copie du lien");
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white flex flex-col justify-center items-center p-12 text-center relative md:w-[40vw] w-[92vw]">
                {/* Bouton pour fermer la popup */}
                <button className="absolute top-3 right-3 text-black" onClick={onClose}> <X className={"size-[2rem]"}/> </button>

                {/* Message */}
                <p className="text-black font-FuturaPT_book text-[1.75rem] mb-4">
                    Thank you for signing up! ✨
                </p>
                <p className={"text-black font-FuturaPT_book text-[1.75rem] mb-4"}>
                    You’re now on the list for exclusive early access.
                    A new experience is on the horizon. Stay tuned, you
                    won’t want to miss this.
                </p>

                {/* Bouton d’action */}
                <div className="mt-4">
                    {onConfirm && (
                        <button
                            className="text-white text-[1.75rem] font-FuturaPT_book bg-[#eba698] px-4 py-2.5"
                            onClick={copyToClipboard}
                            type={"button"}
                        >
                            {buttonText}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}


export default Popup
