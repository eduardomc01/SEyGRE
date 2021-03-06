﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SEyGRE.Models
{
    public partial class RelacionEventosEstatusCentro
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Organizador { get; set; }

        public TimeSpan? HorarioInicio { get; set; }
        public TimeSpan? HorarioFinal { get; set; }
        public int? Telefono { get; set; }

        public string Fecha { get; set; }
        public string Estatus { get; set; }
        public string NombreCentro { get; set; }


        public double? Latitud { get; set; }
        public double? Longitud { get; set; }


        public int? IdEstatus { get; set; }
        public int? IdCentroAcopio { get; set; }
        public string Busqueda { get; set; } /*funcionara ?*/
    }
}