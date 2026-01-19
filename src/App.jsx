import React, { useState } from 'react';
import { CheckCircle, ChevronRight, FileText, Shield, TrendingUp, Users, Building2, Wallet, Scale, Target, Zap, Database, Monitor, Clock, ArrowRight, ArrowDown, Layers, Settings, BarChart3, Link2, X, Brain, Activity } from 'lucide-react';

const sections = [
  { id: 'resumen', label: 'Resumen Ejecutivo', icon: FileText },
  { id: 'rbi', label: 'Modelo RBI', icon: Brain },
  { id: 'producto', label: 'Producto y Tecnología', icon: Layers },
  { id: 'partnerships', label: 'Partnerships', icon: Link2 },
  { id: 'cartera', label: 'Estado de Cartera', icon: BarChart3 },
  { id: 'capital', label: 'Levantamiento de Capital', icon: Wallet },
  { id: 'regulatorio', label: 'Cumplimiento Regulatorio', icon: Shield },
  { id: 'riesgo', label: 'Política de Riesgo', icon: Scale },
  { id: 'expectativas', label: 'Expectativas 2026', icon: Target },
];

const Card = ({ children, className = '', highlight = false }) => (
  <div className={`bg-white rounded-lg p-6 transition-all duration-300 hover:shadow-lg ${highlight ? 'border-2 border-blue-500' : 'border border-slate-200'} ${className}`}>
    {children}
  </div>
);

const SectionHeader = ({ title, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="p-2 bg-blue-100 rounded-lg">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h2 className="text-2xl font-semibold text-slate-800">{title}</h2>
  </div>
);

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-3xl max-h-[80vh] overflow-y-auto w-full shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 text-slate-600 leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

const ModeloRBI = () => {
  const [selectedSegment, setSelectedSegment] = useState('medio');
  const segmentData = {
    bajo: { pdSinacofi: 15, rbiScore: 85, factor: 0.6, pdAjustada: 9 },
    medio: { pdSinacofi: 25, rbiScore: 72, factor: 0.7, pdAjustada: 17.5 },
    alto: { pdSinacofi: 40, rbiScore: 55, factor: 0.85, pdAjustada: 34 },
  };
  const currentData = segmentData[selectedSegment];

  return (
    <div className="space-y-6">
      <SectionHeader title="Rent Behavior Index (RBI)" icon={Brain} />
      <Card highlight>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-slate-800 mb-2">El Activo Intelectual de PROPIO</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            El RBI es un score propietario que demuestra que el <strong>comportamiento de pago en vivienda (Commitment)</strong> es un predictor superior de cumplimiento futuro frente a métricas tradicionales de capacidad financiera (Ability), <em>siempre y cuando se aplique a la 1era vivienda</em>.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500 rounded-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-semibold text-slate-800">Tesis Central Validada en 2025</h4>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Durante 24 meses sometimos nuestra tesis a prueba empírica. <strong>Hoy cerramos el año no con hipótesis, sino con evidencia:</strong> clientes con perfiles crediticios tradicionalmente débiles pero con comportamiento de pago consistente han demostrado cumplimiento íntegro, mejora en scores de buró, y transición efectiva al sistema bancario.
          </p>
        </div>
      </Card>

      <Card>
        <h3 className="font-semibold text-slate-800 mb-4">Metodología de Ajuste de Probabilidad de Default</h3>
        <div className="bg-slate-900 rounded-xl p-6 mb-6 text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="bg-blue-500/20 border border-blue-400 rounded-lg px-4 py-3">
              <p className="text-xs text-blue-300 mb-1">PD Ajustada</p>
              <p className="text-2xl font-bold text-white">{currentData.pdAjustada}%</p>
            </div>
            <span className="text-2xl text-slate-400">=</span>
            <div className="bg-red-500/20 border border-red-400 rounded-lg px-4 py-3">
              <p className="text-xs text-red-300 mb-1">PD Sinacofi</p>
              <p className="text-2xl font-bold text-white">{currentData.pdSinacofi}%</p>
            </div>
            <span className="text-2xl text-slate-400">×</span>
            <div className="bg-emerald-500/20 border border-emerald-400 rounded-lg px-4 py-3">
              <p className="text-xs text-emerald-300 mb-1">Factor RBI</p>
              <p className="text-2xl font-bold text-white">{currentData.factor}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm text-slate-600 mb-3">Selecciona un perfil de riesgo para ver el ajuste:</p>
          <div className="flex gap-2">
            {[{ id: 'bajo', label: 'Riesgo Bajo' }, { id: 'medio', label: 'Riesgo Medio' }, { id: 'alto', label: 'Riesgo Alto' }].map((seg) => (
              <button key={seg.id} onClick={() => setSelectedSegment(seg.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedSegment === seg.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                {seg.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">PD Tradicional (Sinacofi)</span>
              <span className="font-semibold text-red-600">{currentData.pdSinacofi}%</span>
            </div>
            <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full transition-all duration-500" style={{ width: `${currentData.pdSinacofi}%` }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">RBI Score (Comportamiento)</span>
              <span className="font-semibold text-emerald-600">{currentData.rbiScore}/100</span>
            </div>
            <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${currentData.rbiScore}%` }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">PD Ajustada (PROPIO)</span>
              <span className="font-semibold text-blue-600">{currentData.pdAjustada}%</span>
            </div>
            <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full transition-all duration-500" style={{ width: `${currentData.pdAjustada}%` }} />
            </div>
          </div>
          <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="font-semibold text-emerald-800">
                Reducción de {Math.round((1 - currentData.factor) * 100)}% en la estimación de riesgo
              </span>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="font-semibold text-slate-800 mb-4">Impacto Demostrado del RBI</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <p className="font-semibold text-slate-800 mb-1">Identificación de Activos</p>
            <p className="text-sm text-slate-600">Detecta activos con desempeño superior al esperado por scoring tradicional</p>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100 text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Activity className="w-6 h-6 text-emerald-600" />
            </div>
            <p className="font-semibold text-slate-800 mb-1">Reducción Falsos Negativos</p>
            <p className="text-sm text-slate-600">Aprueba clientes viables que el sistema tradicional rechaza</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-100 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <p className="font-semibold text-slate-800 mb-1">Incubación Crediticia</p>
            <p className="text-sm text-slate-600">Prepara sujetos de crédito para transición al sistema bancario</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

const ResumenEjecutivo = () => (
  <div className="space-y-6">
    <SectionHeader title="Resumen Ejecutivo" icon={FileText} />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
        <CheckCircle className="w-6 h-6 text-emerald-600" />
        <div>
          <p className="text-2xl font-bold text-emerald-700">USD 2M</p>
          <p className="text-sm text-emerald-600">Desplegados</p>
        </div>
      </div>
      <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <CheckCircle className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-2xl font-bold text-blue-700">16</p>
          <p className="text-sm text-blue-600">Unidades financiadas</p>
        </div>
      </div>
      <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
        <CheckCircle className="w-6 h-6 text-emerald-600" />
        <div>
          <p className="text-2xl font-bold text-emerald-700">0%</p>
          <p className="text-sm text-emerald-600">Mora / Default</p>
        </div>
      </div>
      <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg border border-purple-100">
        <CheckCircle className="w-6 h-6 text-purple-600" />
        <div>
          <p className="text-2xl font-bold text-purple-700">2 Exits</p>
          <p className="text-sm text-purple-600">Completados</p>
        </div>
      </div>
    </div>

    <Card highlight>
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-100 rounded-lg shrink-0">
          <Brain className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-800 mb-2">Hito Fundacional 2025: Validación del RBI</h3>
          <p className="text-slate-600 leading-relaxed">
            El ejercicio 2025 marca la <strong>validación empírica de nuestra tesis central de riesgo</strong>: el comportamiento de pago en vivienda (Commitment) es un predictor superior de cumplimiento futuro frente a métricas tradicionales de capacidad financiera (Ability).
          </p>
        </div>
      </div>
    </Card>

    <Card>
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>Durante 2025, PROPIO logró consolidarse como actor clave en financiamiento habitacional bajo el modelo rent-to-own, combinando innovación tecnológica, avances regulatorios y alianzas estratégicas.</p>
        <p>Se ejecutó con éxito un portafolio de ~USD 2 millones en 16 propiedades, sin mora ni default. Se concretaron <strong>2 exits de cartera</strong>, validando la tesis de inversión. El partnership con Coopeuch está completamente estructurado, con contratos finalizados.</p>
        <p>Actualmente estamos <strong>participando en Due Diligence con instituciones financieras</strong> para acceder a nuevas líneas de financiamiento que aceleren el crecimiento de la operación.</p>
        <p>Creemos que la <strong>tecnología que hemos desarrollado es altamente aplicable al modelo R20</strong>, pero también tiene aplicaciones potenciales en otros productos de crédito donde el comportamiento de pago sea un predictor relevante de cumplimiento.</p>
      </div>
    </Card>

    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
      <p className="text-center text-lg font-light italic">
        "Transformando comportamiento en información, información en predictibilidad, y predictibilidad en acceso financiero sostenible."
      </p>
    </div>
  </div>
);

const Partnerships = () => (
  <div className="space-y-6">
    <SectionHeader title="Partnerships" icon={Link2} />
    <Card highlight>
      <h3 className="font-semibold text-slate-800 mb-3">Alianza Estratégica con Coopeuch</h3>
      <p className="text-slate-600 mb-4 leading-relaxed">
        Durante 2025, se completó de forma exitosa la estructuración integral del Joint Venture entre PROPIO y Coopeuch, abarcando seis pilares fundamentales: Legal, Operacional, Comercial, Fondeo, Modelo de Negocio y Tecnología.
      </p>
      <div className="flex flex-wrap gap-3">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Fondo de inversión por USD 20M</span>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">150-200 casos proyectados</span>
        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium flex items-center gap-1">
          <CheckCircle className="w-4 h-4" /> Contratos cerrados
        </span>
      </div>
    </Card>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        { title: 'Legal', desc: 'Contratos marco y cliente-PROPIO finalizados. Cumplimiento CMF.' },
        { title: 'Operacional', desc: 'Auditoría de riesgo operacional completada. Flujo diseñado con cuentas individuales.' },
        { title: 'Comercial', desc: 'CLP 50M para marketing co-brandeado. Journey comercial completo.' },
        { title: 'Fondeo', desc: 'Conexión directa con Fondo FT-PROPIO estructurado con Frontal Trust.' },
        { title: 'Modelo', desc: 'Coopeuch comprometió crédito hipotecario a afiliados que completen el programa.' },
        { title: 'Tecnología', desc: 'Integración API, auditoría de ciberseguridad y escalabilidad validada.' },
      ].map((item, i) => (
        <Card key={i}>
          <div className="flex items-start justify-between mb-3">
            <h4 className="font-semibold text-slate-800">{item.title}</h4>
            <CheckCircle className="w-5 h-5 text-emerald-500" />
          </div>
          <p className="text-sm text-slate-600">{item.desc}</p>
        </Card>
      ))}
    </div>
  </div>
);

const EstadoCartera = () => (
  <div className="space-y-6">
    <SectionHeader title="Estado de Cartera" icon={BarChart3} />
    <Card>
      <div className="overflow-x-auto mb-6">
        <table className="w-full">
          <tbody className="divide-y divide-slate-100">
            {[
              { metric: 'Unidades financiadas', value: '16', highlight: true },
              { metric: 'Monto desplegado', value: 'USD 2.000.000', highlight: true },
              { metric: 'Mora', value: '0%', good: true },
              { metric: 'Default', value: '0%', good: true },
              { metric: '2 exits', value: 'Ejecutados', good: true },
              { metric: 'Próximos exits', value: 'Proyectados 2-3 meses' },
              { metric: 'Evolución crediticia', value: 'Mejora documentada en scores', good: true },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="py-4 px-4 text-slate-600 font-medium">{row.metric}</td>
                <td className="py-4 px-4 text-right">
                  <span className={`font-semibold ${row.good ? 'text-emerald-600' : row.highlight ? 'text-blue-600' : 'text-slate-800'}`}>
                    {row.value}
                  </span>
                  {row.good && <CheckCircle className="w-4 h-4 text-emerald-500 inline ml-2" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
        <p className="text-emerald-800">
          <strong>Validación del RBI:</strong> Estos resultados confirman que el comportamiento de pago observado predice el cumplimiento con mayor precisión que los scores tradicionales.
        </p>
      </div>
    </Card>
  </div>
);

const LevantamientoCapital = () => (
  <div className="space-y-6">
    <SectionHeader title="Levantamiento de Capital" icon={Wallet} />
    <Card>
      <div className="relative mb-8">
        <div className="absolute top-5 left-0 right-0 h-1 bg-slate-200 rounded-full" />
        <div className="absolute top-5 left-0 w-2/3 h-1 bg-blue-500 rounded-full" />
        <div className="relative flex justify-between">
          {[
            { label: 'Levantamiento de deuda', done: true },
            { label: 'Constitución fondo FT-PROPIO', done: true },
            { label: 'Inicio deployment 2026', done: false },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center w-1/3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.done ? 'bg-blue-500' : 'bg-slate-200'} mb-3`}>
                {item.done ? <CheckCircle className="w-5 h-5 text-white" /> : <Clock className="w-5 h-5 text-slate-500" />}
              </div>
              <p className={`text-sm ${item.done ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h4 className="font-semibold text-slate-800 mb-2">Frontal Trust</h4>
          <p className="text-xs text-blue-600 font-medium mb-2">Deuda Estructurada</p>
          <p className="text-sm text-slate-600">Estructura dedicada para primera etapa del programa.</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
          <h4 className="font-semibold text-slate-800 mb-2">LUCHA VC</h4>
          <p className="text-xs text-purple-600 font-medium mb-2">Capital Híbrido</p>
          <p className="text-sm text-slate-600">Equity corporativo + línea de financiamiento de impacto.</p>
        </div>
        <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
          <h4 className="font-semibold text-slate-800 mb-2">Pipeline Institucional</h4>
          <p className="text-xs text-emerald-600 font-medium mb-2">En Proceso</p>
          <p className="text-sm text-slate-600">Actores con mandato ESG.</p>
        </div>
      </div>

      <h3 className="font-semibold text-slate-800 mb-3">Fondo FT-PROPIO</h3>
      <p className="text-slate-600 leading-relaxed">
        Fondo de Inversión Público estructurado en alianza con Frontal Trust (~USD 20 millones). El reglamento interno está finalizado, incluyendo políticas de inversión, estructura de gobierno corporativo y mecanismos de control de riesgo.
      </p>
    </Card>
  </div>
);

const CumplimientoRegulatorio = () => (
  <div className="space-y-6">
    <SectionHeader title="Cumplimiento Regulatorio" icon={Shield} />
    <div className="grid md:grid-cols-2 gap-4">
      <Card>
        <div className="flex items-start gap-4">
          <div className="p-3 bg-emerald-100 rounded-lg">
            <CheckCircle className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Registro UAF</h4>
            <p className="text-emerald-600 text-sm font-medium mb-2">Completado - Folio N° 19803</p>
            <p className="text-sm text-slate-500">Registro como sujeto obligado ante la Unidad de Análisis Financiero.</p>
          </div>
        </div>
      </Card>
      <Card>
        <div className="flex items-start gap-4">
          <div className="p-3 bg-amber-100 rounded-lg">
            <Clock className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Ley Fintech (CMF)</h4>
            <p className="text-amber-600 text-sm font-medium mb-2">En fase final</p>
            <p className="text-sm text-slate-500">Inscripción para operar bajo la Ley 21.521.</p>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

const PoliticaRiesgo = () => (
  <div className="space-y-6">
    <SectionHeader title="Política de Riesgo" icon={Scale} />
    <Card highlight>
      <p className="text-slate-600 leading-relaxed">
        Marco General de Políticas de Riesgo alineado con estándares bancarios. El <strong>Rent Behavior Index (RBI)</strong> es el núcleo de este marco, combinando la PD de Sinacofi con factores de comportamiento real.
      </p>
    </Card>
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <div className="p-2 bg-blue-100 rounded-lg"><Users className="w-5 h-5 text-blue-600" /></div>
          Política de Riesgo de Crédito
        </h4>
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 mb-4">
          <p className="font-mono text-center text-blue-800">PD Ajustada = PD Sinacofi × Factor (RBI)</p>
        </div>
        <p className="text-sm text-slate-600">Umbrales máximos para ratios de capacidad de pago: Gasto Financiero/Ingreso, Apalancamiento y Cuota/Ingreso.</p>
      </Card>
      <Card>
        <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <div className="p-2 bg-blue-100 rounded-lg"><Building2 className="w-5 h-5 text-blue-600" /></div>
          Política de Financiamiento de Activos
        </h4>
        <p className="text-sm text-slate-600 mb-3">Enfoque liquidity-first con Asset Credit Score en cinco dimensiones.</p>
        <div className="space-y-1 text-sm">
          {['DSCR ≥ 1.3x', 'Score ≥ 600', 'PBB ≤ 30%'].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-slate-600">{item}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  </div>
);

const Expectativas2026 = () => (
  <div className="space-y-6">
    <SectionHeader title="Expectativas 2026" icon={Target} />
    <Card highlight>
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-100 rounded-lg shrink-0">
          <Brain className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-800 mb-2">Aprendizaje Central de 2025</h3>
          <p className="text-slate-600 leading-relaxed">
            PROPIO no es un intermediario inmobiliario, sino una <strong>infraestructura de refinamiento de riesgo crediticio</strong> basada en datos reales de comportamiento.
          </p>
        </div>
      </div>
    </Card>

    <Card>
      <h4 className="font-semibold text-slate-800 mb-4">Roadmap Estratégico</h4>
      <div className="flex flex-col gap-4">
        {[
          { phase: 'Fase 1', title: 'Q1 2026', desc: 'Lanzamiento operativo con Coopeuch + Frontal Trust' },
          { phase: 'Fase 2', title: 'Q2-Q3', desc: 'Escalar originación a 150-200 unidades' },
          { phase: 'Fase 3', title: 'Q4', desc: 'Modelo asset-light + expansión regional' },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100 w-full">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{item.phase}</span>
              <h5 className="font-semibold text-slate-800 mt-1">{item.title}</h5>
              <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
            </div>
            {i < 2 && <div className="py-2"><ArrowDown className="w-5 h-5 text-blue-400" /></div>}
          </div>
        ))}
      </div>
    </Card>

    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white text-center">
      <p className="text-lg font-light italic">"Transformando comportamiento en información, información en predictibilidad, y predictibilidad en acceso financiero sostenible."</p>
      <p className="text-sm text-blue-200 mt-2">PROPIO SpA</p>
    </div>
  </div>
);

const ProductoTecnologia = () => (
  <div className="space-y-6">
    <SectionHeader title="Desarrollo de Producto y Tecnología" icon={Layers} />
    <Card highlight>
      <p className="text-slate-600 leading-relaxed">
        Durante 2025, PROPIO consolidó una infraestructura digital que automatiza de forma integral el ciclo de financiamiento habitacional rent-to-own.
      </p>
    </Card>
    <Card>
      <h3 className="font-semibold text-slate-800 mb-4">Ecosistema Digital PROPIO</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {[
          { icon: Users, title: 'Onboarding 100% digital', desc: 'API a Equifax, Floid e Infocheck' },
          { icon: Building2, title: 'Marketplace propiedades', desc: 'Gestión de inventario por inmobiliarias' },
          { icon: Monitor, title: 'Dashboard JV y Comité', desc: 'Evaluación y aprobación en línea' },
          { icon: Database, title: 'Client Data Driven', desc: 'Monitoreo mensual y alertas' },
          { icon: BarChart3, title: 'Sistema de reportería', desc: 'Para aliados financieros' },
          { icon: Brain, title: 'Motor RBI Integrado', desc: 'Scoring propietario en tiempo real' },
        ].map((item, i) => (
          <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                <item.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-slate-800">{item.title}</p>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
        <h4 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">Flujo Ecosistema PROPIO</h4>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {['Originación', 'Onboarding', 'Análisis de Riesgo', 'Scoring RBI', 'Comité digital', 'Financiamiento', 'Monitoreo'].map((step, i) => (
            <React.Fragment key={i}>
              <div className={`px-3 py-2 rounded-lg shadow-sm text-xs font-medium border ${step === 'Scoring RBI' ? 'bg-blue-500 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-200'}`}>
                {step}
              </div>
              {i < 6 && <ArrowRight className="w-4 h-4 text-blue-400 shrink-0" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Card>
  </div>
);

export default function InvestorDashboard() {
  const [activeSection, setActiveSection] = useState('resumen');

  const renderSection = () => {
    switch (activeSection) {
      case 'resumen': return <ResumenEjecutivo />;
      case 'rbi': return <ModeloRBI />;
      case 'producto': return <ProductoTecnologia />;
      case 'partnerships': return <Partnerships />;
      case 'cartera': return <EstadoCartera />;
      case 'capital': return <LevantamientoCapital />;
      case 'regulatorio': return <CumplimientoRegulatorio />;
      case 'riesgo': return <PoliticaRiesgo />;
      case 'expectativas': return <Expectativas2026 />;
      default: return <ResumenEjecutivo />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "'Inter', sans-serif" }}>
      <header className="sticky top-0 bg-white border-b border-slate-200 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h1 className="font-semibold text-slate-800">PROPIO</h1>
                <p className="text-xs text-slate-500">Informe de Gestión Anual 2025</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="sticky top-16 bg-white border-b border-slate-200 z-30 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 py-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button key={section.id} onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${activeSection === section.id ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          {renderSection()}
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm text-slate-500">© 2025 PROPIO SpA. Informe de Gestión Anual – Confidencial para accionistas.</p>
        </div>
      </footer>
    </div>
  );
}
