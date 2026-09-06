import { redirect } from 'next/navigation';

/**
 * La page « Qui suis-je ? » a été fusionnée dans la section À propos de
 * l'accueil : son texte vit désormais dans `about` (src/data/data.ts).
 * On garde la route pour ne pas casser les liens et favoris existants,
 * et pour éviter d'avoir le même contenu à deux adresses.
 */
export default function Apropos() {
  redirect('/#apropos');
}
