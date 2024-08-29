/**
 *
 * Recebe string '2.500,00' retorna numero 2500.00
 */

export default function moedaParaNumero(moeda: string) {
  const numero = Number(moeda.replaceAll('.', '').replace(',', '.'));
  return isNaN(numero) ? null : numero;
}
