import os
import re

DOSSIER = "."  # dossier à scanner, "." = dossier courant

pattern = re.compile(r'\.(jpe?g|png)(?=["\'\s>])', re.IGNORECASE)

for racine, _, fichiers in os.walk(DOSSIER):
    for nom in fichiers:
        if nom.endswith(".html"):
            chemin = os.path.join(racine, nom)
            with open(chemin, "r", encoding="utf-8") as f:
                contenu = f.read()

            nouveau_contenu, nb = pattern.subn(".webp", contenu)

            if nb > 0:
                with open(chemin, "w", encoding="utf-8") as f:
                    f.write(nouveau_contenu)
                print(f"{chemin} : {nb} remplacement(s)")

print("Terminé.")