export const WHATSAPP_NUMBER = "2340000000000";
export const INSTAGRAM_HANDLE = "gunji.thesneakerhead";

export function waLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
