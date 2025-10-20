// Funcionalidad para descargar currículum en PDF
function downloadCV(version) {
  // Mostrar mensaje de carga
  const button = document.getElementById(`download-btn-${version}`);
  const originalText = button ? button.innerHTML : '';
  
  if (button) {
    button.innerHTML = '⏳ Generando PDF...';
    button.disabled = true;
  }

  // Configuración para cada versión de currículum
  const configs = {
    v1: {
      element: document.body,
      filename: 'Luis_Requena_Curriculum_V1.pdf',
      opt: {
        margin: 0,
        filename: 'Luis_Requena_Curriculum_V1.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: false,
          letterRendering: true
        },
        jsPDF: { 
          unit: 'cm', 
          format: 'a4', 
          orientation: 'portrait',
          compress: true
        }
      }
    },
    v2: {
      element: document.querySelector('.container'),
      filename: 'Luis_Requena_Curriculum_V2.pdf',
      opt: {
        margin: [0.8, 0.8, 0.8, 0.8],
        filename: 'Luis_Requena_Curriculum_V2.pdf',
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: false,
          letterRendering: true,
          scrollY: -window.scrollY,
          scrollX: -window.scrollX,
          windowWidth: document.querySelector('.container').scrollWidth,
          windowHeight: document.querySelector('.container').scrollHeight,
          onclone: function(clonedDoc) {
            // Asegurar que el grid se mantenga en 2 columnas
            const skillsGrid = clonedDoc.querySelector('.skills-grid');
            if (skillsGrid) {
              skillsGrid.style.display = 'grid';
              skillsGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
              skillsGrid.style.gap = '12px';
              skillsGrid.style.width = '100%';
            }
            // Asegurar que cada categoría ocupe su espacio
            const skillCategories = clonedDoc.querySelectorAll('.skill-category');
            skillCategories.forEach((cat) => {
              cat.style.width = '100%';
              cat.style.boxSizing = 'border-box';
              cat.style.display = 'block';
            });
          }
        },
        jsPDF: { 
          unit: 'cm', 
          format: 'a4', 
          orientation: 'portrait',
          compress: true
        },
        pagebreak: { 
          mode: ['avoid-all', 'css', 'legacy'],
          after: ['.intro-section'],
          avoid: ['.project-item', '.work-item', '.academic-item', '.skill-category']
        }
      }
    }
  };

  const config = configs[version];

  if (!config) {
    console.error('Versión de currículum no válida');
    if (button) {
      button.innerHTML = originalText;
      button.disabled = false;
    }
    return;
  }

  // Ocultar temporalmente el botón de descarga
  if (button) {
    button.style.display = 'none';
  }

  // Generar PDF
  html2pdf()
    .set(config.opt)
    .from(config.element)
    .save()
    .then(() => {
      // Restaurar el botón
      if (button) {
        button.style.display = 'block';
        button.innerHTML = originalText;
        button.disabled = false;
      }
      console.log('PDF generado exitosamente');
    })
    .catch((error) => {
      console.error('Error al generar PDF:', error);
      alert('Hubo un error al generar el PDF. Por favor, intenta nuevamente.');
      // Restaurar el botón
      if (button) {
        button.style.display = 'block';
        button.innerHTML = originalText;
        button.disabled = false;
      }
    });
}

// Función alternativa usando window.print() con estilos optimizados
function printCV() {
  window.print();
}

// Event listeners para los botones
document.addEventListener('DOMContentLoaded', function() {
  // Detectar qué versión de currículum estamos viendo
  const isV1 = document.querySelector('.derecha') && document.querySelector('.izquierda');
  const isV2 = document.querySelector('.container .sidebar') && document.querySelector('.container .main-content');
  
  // Configurar botones según la versión
  if (isV1) {
    const btnDownload = document.getElementById('download-btn-v1');
    const btnPrint = document.getElementById('print-btn-v1');
    
    if (btnDownload) {
      btnDownload.addEventListener('click', () => downloadCV('v1'));
    }
    
    if (btnPrint) {
      btnPrint.addEventListener('click', printCV);
    }
  }
  
  if (isV2) {
    const btnDownload = document.getElementById('download-btn-v2');
    const btnPrint = document.getElementById('print-btn-v2');
    
    if (btnDownload) {
      btnDownload.addEventListener('click', () => downloadCV('v2'));
    }
    
    if (btnPrint) {
      btnPrint.addEventListener('click', printCV);
    }
  }
});
