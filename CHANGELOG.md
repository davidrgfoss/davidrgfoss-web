
# Change Log
En este fichero ire anotando todos los cambios del proyecto, pues a medida que ha ido creciendo lo he visto necesario.
 
## 28/09/2023
 
Actualmente el script para actualizar y desplegar la web ya no es necesario.

 
### Added
- [SonarCloud Scan](.github/workflows/sonarcloud.yml)
  Se ha añadido este "workflow" para escanear el codigo por posibles errores o vulnerabilidades.
- [Snyk Scan](.github/workflows/snyk.yml)
  Se ha añadido este "workflow" para escanear vulnerabilidades en las dependencias de node usadas para mi proyecto.
- [Docusaurus/QuantCDN Deploy](.github/workflows/docusaurusdeploy.yml)
  Se ha añadido este "workflow" para actualizar y desplegar de forma automatica mi web en el hosting.
- **CodeQL**
  Se ha añadido este "workflow" para escanear el codigo por posibles mejoras y evitar redundancias, al ser propio de github no tengo el fichero de configuración en mi repositorio como el resto.
 
### Changed
- [Directorio obsoleto](obsoleto)
  Se ha creado este directorio donde metere cualquier parte del codigo que caiga en desuso u obsoleto. En este caso el primer fichero que sera guardado aqui es el script para desplegar la web.
 
### Fixed
- [Fichero con las dependencias](package.json)
  En este fichero se ha corregidor dos vulnerabilidades son la "CVE-2022-33987" y "CVE-2020-7753". Para corregir estas vulnerabilidades se ha actualizado la version de las dependencias "got" y "trim".
 
