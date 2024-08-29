export default function stringToDate(texto: string): Date {
  const [data, horas] = texto.split(' ');
  const [dia, mes, ano] = data.split('/').map(Number);
  const [hora, minuto] = horas.split(':').map(Number);
  return new Date(ano, mes - 1, dia, hora, minuto);
}
