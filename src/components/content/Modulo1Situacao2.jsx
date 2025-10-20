import React from 'react'
import { FaPiggyBank, FaChartLine } from 'react-icons/fa'

const Modulo1Situacao2 = () => {
  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden p-6 md:p-10">
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-300">
        {/* Bloco 1 */}
        <div className="md:w-1/2 px-4 md:px-8 pb-6 md:pb-0 flex flex-col items-center text-center md:text-left">
          <FaPiggyBank className="text-green-600 text-3xl mb-4" />
          <p className="text-slate-700 text-sm md:text-base">
            Além disso, a cultura consumista e a pressão por gastos desnecessários agravam ainda mais a situação financeira de muitas famílias brasileiras. Uma pesquisa do Instituto DataFolha de 2024 apontou que uma parcela significativa da população não possui reservas financeiras adequadas, o que dificulta a capacidade de lidar com imprevistos e de investir no futuro. A falta de planejamento financeiro e a tendência ao consumo impulsivo resultam em dificuldades para poupar e investir.
          </p>
        </div>

        {/* Bloco 2 */}
        <div className="md:w-1/2 px-4 md:px-8 pt-6 md:pt-0 flex flex-col items-center text-center md:text-left">
          <FaChartLine className="text-blue-600 text-3xl mb-4" />
          <p className="text-slate-700 text-sm md:text-base">
            Ao integrar a educação financeira no currículo escolar, podemos ajudar a formar indivíduos mais preparados para enfrentar esses desafios, promovendo uma mentalidade de economia e investimento desde cedo. Isso não só melhora a saúde financeira individual, mas também contribui para a estabilidade econômica do país como um todo.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Modulo1Situacao2
