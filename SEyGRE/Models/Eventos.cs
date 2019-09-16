using System;
using System.Collections.Generic;

namespace SEyGRE.Models
{
    public partial class Eventos
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Organizador { get; set; }
        public TimeSpan? HorarioInicio { get; set; }
        public TimeSpan? HorarioFinal { get; set; }
        public int? Telefono { get; set; }
        public DateTime? Fecha { get; set; }
        public int? IdEstatus { get; set; }
        public int? IdCentroAcopio { get; set; }
        public double? Latitud { get; set; }
        public double? Longitud { get; set; }
    }
}
