# Movimientos JDM

App personal (página instalable) para consultar movimientos bancarios.

El archivo `datos.bin` está **cifrado** (AES-256 + HMAC-SHA256): la página solo lo abre con la
llave del dueño, que no está en este repositorio. Esa llave llega por el enlace privado del dueño
o sale de `acceso.bin` con su usuario y contraseña (PBKDF2-SHA256 de 600.000 vueltas + AES-256 +
HMAC-SHA256). Sin esos datos los archivos son ilegibles.
La contraseña también se puede cambiar desde la app: la página arma el `acceso.bin` nuevo en el
dispositivo y lo manda, firmado con la llave, en un correo del dueño a su propia cuenta; el PC del
dueño verifica la firma y lo publica aquí.
Lo actualiza automáticamente el PC del dueño.
