# Movimientos JDM

App personal (página instalable) para consultar movimientos bancarios.

El archivo `datos.bin` está **cifrado** (AES-256 + HMAC-SHA256): la página solo lo abre con la
llave del dueño, que no está en este repositorio. Esa llave llega por el enlace privado del dueño
o sale de `acceso.bin` con su usuario y contraseña (PBKDF2-SHA256 de 600.000 vueltas + AES-256 +
HMAC-SHA256). Sin esos datos los archivos son ilegibles.
Lo actualiza automáticamente el PC del dueño.
