/**
 * @author yenilikci <https://github.com/yenilikci/>
 */

//döküman seçicileri
const form = document.querySelector('form');
const veri = document.querySelector('#gorevIsmi');
const hepsiniSil = document.querySelector('#hepsiniSil');
const gorevListesi = document.querySelector('#gorevListesi');
const elemanlar = ['Kahvaltı yap','Dişlerini fırçala','Sabah egzersizi yap'];

//elemanların yüklenmesi
elemanYukle();

//tüm olayları çağır
olaylar();

//tüm olay dizini
function olaylar() {
    //eleman ekleme olayı
    form.addEventListener('submit', elemanEkle);
    //eleman silme
    gorevListesi.addEventListener('click', elemanSil);
    //tüm elemanları silme
    hepsiniSil.addEventListener('click', elemanlarinHepsiniSil);
}

function elemanYukle()
{
    elemanlar.forEach(function(eleman)
    {
        elemanOlustur(eleman);
    })
}

function elemanOlustur(elemanVeri)
{
        //li elemanı oluşturma
        const li = document.createElement('li');
        //li elemanına sınıf atayalım
        li.className = 'list-group-item';
        //yazının li içerisine eklenmesi için
        li.appendChild(document.createTextNode(elemanVeri));
    
    
        //li elemanının içindeki a etiketini oluşturma
        const a = document.createElement('a');
        a.classList = 'float-right';
    
        //a attribute yapılandırma
        a.setAttribute('href', '#');
        a.innerHTML = '<i class="fas fa-times"></i>';
    
        //a etiketini li etiketinin içerisine ekleme 
        li.appendChild(a);
    
        //li etiketini ul etiketinin içerisine yerleştirme
        gorevListesi.appendChild(li);
    
}

//eleman ekleme
function elemanEkle(e) {
    if (veri.value == '') //boş geçilmişse uyarı
    {
        alert('Yeni görev giriniz bölümünü boş bırakmayınız...');
    }

    //gelen veri değerine göre oluşturulan eleman ekleniyor
    elemanOlustur(veri.value);

    //girdi temizleme
    veri.value = '';

    e.preventDefault();
}

//eleman silme
function elemanSil(e) {
    if (e.target.className === 'fas fa-times') {
        e.target.parentElement.parentElement.remove();
    }

    e.preventDefault();
}

//elemanların hepsini silme
function elemanlarinHepsiniSil(e) {
    //gorevListesi.innerHTML='';

    if (confirm('Hepsini silmek istediğinize emin misiniz?')) {
        //opsiyonel çözüm;
        while (gorevListesi.firstChild) {
            gorevListesi.removeChild(gorevListesi.firstChild);
        }
    }

    e.preventDefault();
}