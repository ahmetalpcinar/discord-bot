# Bilgi
Bu proje, JavaScript ile Discord botu oluşturmanıza olanak sağlamaktadır. Aşağıda verilen adımları sırası ile takip ettikten sonra artık sizde bir Bot Developer'ı olabilirsiniz!

### 📁 Dosya Kurulumu
- İlk olarak bilgisayarınıza uygun olacak ayarlarda [Node.js](https://nodejs.org/en) dosyasını indirmeniz ve indirdiğiniz dosyayı bilgisayarınıza kurmanız gerekmektedir.
- Ardından projenize bir isim vererek masaüstünüze klasör açmanız gerekmektedir.
- Bir IDE yardımı ile oluşturduğunuz bu klasörü açmanız gerekmektedir. Ben her zaman [Visual Studio Code](https://code.visualstudio.com) IDE'sini kullanıyorum ve öneriyorum.
- VSC de dosyanızı açtıktan sonra Terminal seçeneğine basıp ardından da Yeni Terminal ile projemize bir terminal oluşturuyoruz.
- Açılan terminale sırası ile `npm init -y`, "npm i discord.js", "npm i @discordjs/voice", "npm i dotenv", "npm i quick.db" ve son olarak "npm i better-sqlite3" yazarak gerekli kütüphaneleri kuruyoruz.

### 💻 Yazılım Kurulumu
- Ardından bu proje de yer alan ".env", "index.js" ve "sources" dosyalarını proje klasörümüzün içine atıyoruz.
- Botumuz şu durumda tamamen hazır hale geliyor ve sadece token ekleme kısmı kalıyor.
- Ardından [Discord Developer Portal](https://discord.com/developers/applications) sitesini açıyoruz ve buradan kendimize yeni bir uygulama oluşturuyoruz.
- Oluşturduğumuz uygulamaya tıklayıp içinde bulunan Bot sayfasına tıklıyoruz.
- Bot sayfasında aşağıda belirtilen gereksinimleri açtıktan sonra Reset Token yazısına tıklayacaksınız.
- Burada oluşan uzun yazı, botunuza ait token yani "çalıştırma anahtarı"dır.
- Bu token'ı kopyalayıp proje klasörünüzün içinde ki ".env" dosyasına girerek aşağıda ki gibi dolduracaksınız.
- Tekrar terminale girdikten sonra "node index.js" yazarak botunuzu başlatabilirsiniz!

<img src="https://github.com/ahmetalpcinar/ahmetalpcinar/blob/main/PNG/image.png">

```javascript
prefix = "."
owner = "KULLANICI_IDNIZ"
guild = "SUNUCU_IDINIZ"
token = "TOKENINIZ"
```

