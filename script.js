/**
 * @author yenilikci <https://github.com/yenilikci/>
 */

//döküman seçicileri
const form = document.querySelector('form');
const veri = document.querySelector('#gorevIsmi');
const hepsiniSil = document.querySelector('#hepsiniSil');
const gorevListesi = document.querySelector('#gorevListesi');

//tüm olayları çağır
olaylar();

//tüm olay dizini
function olaylar() {
    //eleman ekleme olayı
    form.addEventListener('submit', elemanEkle);
}

//eleman ekleme
function elemanEkle(e) {
    if (veri.value == '') //boş geçilmişse uyarı
    {
        alert('Yeni eleman ekleyiniz...');
    }

    //li elemanı oluşturma
    const li = document.createElement('li');
    //li elemanına sınıf atayalım
    li.className = 'list-group-item';
    //yazının li içerisine eklenmesi için
    li.appendChild(document.createTextNode(veri.value));


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

    //girdi temizleme
    veri.value = '';

    e.preventDefault();
}