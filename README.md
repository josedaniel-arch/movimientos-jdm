# Movimientos JDM

App personal (página instalable) para consultar movimientos bancarios.

El archivo `datos.bin` está **cifrado** (AES-256 + HMAC-SHA256): la página solo lo abre con la
llave del enlace privado del dueño, que no está en este repositorio. Sin esa llave el archivo es ilegible.
Lo actualiza automáticamente el PC del dueño.
