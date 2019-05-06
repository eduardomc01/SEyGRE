using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SEyGRE.Models
{
    public partial class seygreContext : DbContext
    {
        public seygreContext()
        {
        }

        public seygreContext(DbContextOptions<seygreContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Centrosacopio> Centrosacopio { get; set; }
        public virtual DbSet<Clasificacion> Clasificacion { get; set; }
        public virtual DbSet<Elementos> Elementos { get; set; }
        public virtual DbSet<Estatus> Estatus { get; set; }
        public virtual DbSet<Personal> Personal { get; set; }
        public virtual DbSet<Residuos> Residuos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySql("Server=localhost;Database=seygre;User=root;Password=123456;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Centrosacopio>(entity =>
            {
                entity.ToTable("centrosacopio");

                entity.HasIndex(e => e.IdEstatus)
                    .HasName("fk_idEstatus_idx");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.IdEstatus)
                    .HasColumnName("idEstatus")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Imagen)
                    .HasColumnName("imagen")
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.Latitud).HasColumnName("latitud");

                entity.Property(e => e.Longitud).HasColumnName("longitud");

                entity.Property(e => e.Nombre)
                    .HasColumnName("nombre")
                    .HasColumnType("varchar(45)");

                entity.Property(e => e.Password)
                    .HasColumnName("password")
                    .HasColumnType("varchar(45)");

                entity.Property(e => e.Usuario)
                    .HasColumnName("usuario")
                    .HasColumnType("varchar(45)");

                entity.HasOne(d => d.IdEstatusNavigation)
                    .WithMany(p => p.Centrosacopio)
                    .HasForeignKey(d => d.IdEstatus)
                    .HasConstraintName("fk_idEstatus_id");
            });

            modelBuilder.Entity<Clasificacion>(entity =>
            {
                entity.ToTable("clasificacion");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Descripccion)
                    .HasColumnName("descripccion")
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.Titulo)
                    .HasColumnName("titulo")
                    .HasColumnType("varchar(45)");
            });

            modelBuilder.Entity<Elementos>(entity =>
            {
                entity.ToTable("elementos");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Descripccion)
                    .HasColumnName("descripccion")
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.Nombre)
                    .HasColumnName("nombre")
                    .HasColumnType("varchar(45)");

                entity.Property(e => e.Porcentaje).HasColumnName("porcentaje");
            });

            modelBuilder.Entity<Estatus>(entity =>
            {
                entity.ToTable("estatus");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Descripccion)
                    .HasColumnName("descripccion")
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.Titulo)
                    .HasColumnName("titulo")
                    .HasColumnType("varchar(45)");
            });

            modelBuilder.Entity<Personal>(entity =>
            {
                entity.ToTable("personal");

                entity.HasIndex(e => e.IdCentro)
                    .HasName("fk_idCentro_id_idx");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Apellidos)
                    .HasColumnName("apellidos")
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.Direccion)
                    .HasColumnName("direccion")
                    .HasColumnType("varchar(90)");

                entity.Property(e => e.Edad)
                    .HasColumnName("edad")
                    .HasColumnType("int(11)");

                entity.Property(e => e.IdCargo)
                    .HasColumnName("idCargo")
                    .HasColumnType("int(11)");

                entity.Property(e => e.IdCentro)
                    .HasColumnName("idCentro")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Nombre)
                    .HasColumnName("nombre")
                    .HasColumnType("varchar(45)");

                entity.HasOne(d => d.IdCentroNavigation)
                    .WithMany(p => p.Personal)
                    .HasForeignKey(d => d.IdCentro)
                    .HasConstraintName("fk_idCentro_id");
            });

            modelBuilder.Entity<Residuos>(entity =>
            {
                entity.ToTable("residuos");

                entity.HasIndex(e => e.IdClasificacion)
                    .HasName("fk_idClasificacion_id_idx");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Fecha)
                    .HasColumnName("fecha")
                    .HasColumnType("date");

                entity.Property(e => e.IdClasificacion)
                    .HasColumnName("idClasificacion")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Nombre)
                    .HasColumnName("nombre")
                    .HasColumnType("varchar(45)");

                entity.Property(e => e.Peso).HasColumnName("peso");

                entity.HasOne(d => d.IdClasificacionNavigation)
                    .WithMany(p => p.Residuos)
                    .HasForeignKey(d => d.IdClasificacion)
                    .HasConstraintName("fk_idClasificacion_id");
            });
        }
    }
}
