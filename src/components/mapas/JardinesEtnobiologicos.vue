<script setup>
import { ref } from 'vue'

const url_gema_geoserver = process.env.VUE_APP_GEMA_GEOSERVER

const props = defineProps({
  ruta_zip: {
    type: String,
  },
})

const abierto = ref(false)
</script>
<template>
  <SisdaiMapa
    class="con-panel-izquierda-vis con-panel-pie-vis"
    :vista="{ extension: '-118.3651,14.5321,-86.7104,32.7187' }"
  >
    <template #panel-izquierda-vis>
      <div class="m-r-2-esc">
        <h4 class="vis-titulo-visualizacion">
          Red de Jardines Etnobiológicos Conahcyt
        </h4>
        <p class="vis-leyenda m-b-0">
          Ubicación de los jardines etnobiológicos, etnobotánicos y botánicos de
          México apoyados por Consejo Nacional de Humanidades, Ciencias y
          Tecnologías (Conahcyt).
        </p>
        <div class="">
          <button
            class="hipervinculo m-b-1"
            @click="abierto = !abierto"
          >
            Navegación por teclado
          </button>
          <div
            class="texto-largo"
            :class="{ abierto: abierto }"
          >
            <div class="notas alerta informativa">
              <div class="alerta__contenido p-2">
                <p class="m-t-0">
                  Sisdai-mapas te permite navegar el mapa desde tu teclado a
                  través de los siguientes comandos:
                </p>
                <ul>
                  <li>
                    <b
                      >Teclas
                      <span class="icono-flecha-izquierda" />
                      <span class="icono-flecha-derecha" />
                      <span class="icono-flecha-arriba" />
                      <span class="icono-flecha-abajo" />
                    </b>
                    Navegar por el mapa y buscar funciones.
                  </li>
                  <li>
                    <b>Tecla <span class="icono-agregar" /></b> Acercar el mapa.
                  </li>
                  <li>
                    <b>Tecla <span class="icono-restar" /></b> Alejar el mapa.
                  </li>
                  <li><b>Tecla D</b> Rotar el mapa hacia la derecha.</li>
                  <li><b>Tecla A</b> Rotar el mapa hacia la izquierda.</li>
                  <li><b>Tecla N</b> Rotar el mapa hacia el norte.</li>
                  <li>
                    <b>Tecla H</b> Regresar a la ubicación inivial del mapa.
                  </li>
                </ul>
                <div class="texto-derecha">
                  <button
                    class="hipervinculo"
                    @click="abierto = false"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <SisdaiLeyenda
          para="hcti_jardines_etnobiologicos_210923_xy_p"
          :sinControl="true"
        /> -->
        <p class="vis-nomenclatura">
          <span class="figura-variable"></span>
          Red de Jardines Etnobiológicos Conahcyt, con corte al 21 de septiembre
          2023
        </p>
      </div>
    </template>

    <template #panel-pie-vis>
      <div class="flex flex-contenido-separado">
        <div class="columna-12-esc">
          <p class="vis-fuente">
            Fuente: Datos de origen del Consejo Nacional de Humanidades,
            Ciencias y Tecnologías (Conahcyt), con corte al 21 de septiembre de
            2023.
          </p>
        </div>
        <div class="columna-4-esc texto-alineado">
          <a
            :href="props.ruta_zip"
            class="boton boton-primario boton-chico descarga m-t-2"
          >
            Descargar datos <span class="icono-archivo-descargar"></span>
            <span class="a11y-solo-lectura">
              Archivo descargable en formato: zip, peso: 30 kB
            </span>
          </a>
        </div>
      </div>
    </template>

    <SisdaiCapaXyz :posicion="1" />

    <!-- <SisdaiCapaWms
      id="hcti_jardines_etnobiologicos_210923_xy_p"
      nombre="Red de Jardines Etnobiológicos Conahcyt, con corte al 21 de septiembre 2023"
      :url="`${url_gema_geoserver}/wms`"
      :parametros="{
        LAYERS: 'hcti_jardines_etnobiologicos_210923_xy_p',
      }"
      :posicion="2"
    /> -->
    <SisdaiCapaVectorial
      id="hcti_jardines_etnobiologicos_210923_xy_p"
      nombre="Red de Jardines Etnobiológicos Conahcyt, con corte al 21 de septiembre 2023"
      :posicion="2"
      :renderizarComoImagen="true"
      :visible="true"
      :fuente="`${url_gema_geoserver}/humanidades_ciencias/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=humanidades_ciencias%3Ahcti_jardines_etnobiologicos_210923_xy_p&outputFormat=application%2Fjson`"
      :globoInformativo="f => `<b>${f.nom_jardin}</b>`"
    />
  </SisdaiMapa>
</template>

<style lang="scss">
.sisdai-mapa {
  // reglas para móvil
  .panel-izquierda-vis {
    .vis-nomenclatura {
      .figura-variable {
        background: rgba(255, 255, 255, 0.4) !important;
        border-radius: 50% !important;
        border: 1.25px solid rgb(51, 153, 204) !important;
      }
    }
    .hipervinculo {
      font-size: 0.75rem;
    }
    .texto-largo {
      max-height: 0;
      overflow: hidden;
      transition: all 0.33s ease-in-out;
      &.abierto {
        max-height: 1660px;
      }
      .alerta {
        width: 100%;
      }
    }
  }
  .contenido-vis {
    .ol-viewport {
      .ol-overlaycontainer-stopevent {
        .sisdai-mapa-control-ajuste-vista {
          right: 24px !important;
        }
      }
      .contenedor-globo-info {
        padding: 8px;
      }
    }
  }
  .panel-pie-vis {
    overflow-x: hidden !important;
    .flex {
      .texto-alineado {
        text-align: center;
      }
    }
  }
  .contenedor-vis-atribuciones .atribucion-sisdai {
    display: none;
  }
  @include mediaquery('esc') {
    // reglas para escritorio
    max-height: none !important;
    grid-template-rows: auto 595px minmax(auto, 85px) !important; // los paneles en medio del encabezado y pie no se desborden

    .panel-izquierda-vis {
      grid-row-end: span 2 !important; // para que el panel izquierdo use dos renglones
    }
    .panel-pie-vis {
      grid-column-start: 2 !important; // para que el pie empiece en la segunda columna
      overflow-x: hidden !important;
      .flex {
        .texto-alineado {
          text-align: right;
        }
      }
    }
  }
}
</style>
