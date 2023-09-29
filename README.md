# Descripción

En este proyecto intento plasmar los conocimientos que tengo en el campo de la informática/programación/administración. La idea es hacer tutoriales o guías, para poder configurar diferentes herramientas o tecnologías, de esta forma poder ayudar a personas que estén en una situación de querer resolver algo y no poder por falta de documentación en español o fiable.

## Estado de la página

En los siguientes iconos puedes ver el estado del codigo y el estado del servidor web.

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=2k5XD9ndVUUD&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=2k5XD9ndVUUD) [![Better Stack Badge](https://uptime.betterstack.com/status-badges/v1/monitor/uyq1.svg)](https://uptime.betterstack.com/?utm_source=status_badge)

# [Ultimos cambios](CHANGELOG.md)

## 28/09/2023
 
Actualmente el script para actualizar y desplegar la web ya no es necesario.

### Añadido
- [SonarCloud Scan](.github/workflows/sonarcloud.yml)
  Se ha añadido este "workflow" para escanear el codigo por posibles errores o vulnerabilidades.
- [Snyk Scan](.github/workflows/snyk.yml)
  Se ha añadido este "workflow" para escanear vulnerabilidades en las dependencias de node usadas para mi proyecto.
- [Docusaurus/QuantCDN Deploy](.github/workflows/docusaurusdeploy.yml)
  Se ha añadido este "workflow" para actualizar y desplegar de forma automática mi web en el hosting.
- **CodeQL**
  Se ha añadido este "workflow" para escanear el codigo por posibles mejoras y evitar redundancias, al ser propio de github no tengo el fichero de configuración en mi repositorio como el resto.
 
### Modificaciones
- [Directorio obsoleto](obsoleto)
  Se ha creado este directorio donde meteré cualquier parte del código que caiga en desuso u obsoleto. En este caso el primer fichero que sera guardado aqui es el script para desplegar la web.
 
### Arreglos/parches
- [Fichero con las dependencias](package.json)
  En este fichero se ha corregido dos vulnerabilidades son la "CVE-2022-33987" y "CVE-2020-7753". Para corregir estas vulnerabilidades se ha actualizado la version de las dependencias "got" y "trim".


