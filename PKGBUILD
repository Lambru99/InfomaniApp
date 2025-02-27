# Maintainer: Ludovico Latini <ludovico.latini@ikmail.com>
pkgname=infomaniapp
pkgver=1.0.0
pkgrel=1
pkgdesc="Electron wrapper for KSuite Infomaniak"
arch=('x86_64')
url="https://ksuite.infomaniak.com/"
license=('ISC')
depends=('electron')
makedepends=('npm' 'git')
source=("index.js" "package.json" "icon.png")
sha256sums=('SKIP' 'SKIP' 'SKIP')

build() {
  npm install
  npm run dist
}

package() {
  install -dm755 "${pkgdir}/opt/${pkgname}"
  cp -r dist/linux-unpacked/* "${pkgdir}/opt/${pkgname}"

  install -dm755 "${pkgdir}/usr/bin"
  ln -s "/opt/${pkgname}/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"

  install -Dm644 icon.png "${pkgdir}/usr/share/pixmaps/${pkgname}.png"

  install -Dm644 <(cat <<EOF
[Desktop Entry]
Name=Infomaniapp
Comment=Electron wrapper for KSuite Infomaniak
Exec=${pkgname}
Icon=${pkgname}
Terminal=false
Type=Application
Categories=Utility;
EOF
  ) "${pkgdir}/usr/share/applications/${pkgname}.desktop"
}
