arkadaşlar merhaba Firestore kullanımında ufak değişiklikler olmuş, takılan arkadaşlara yardımcı olması dileği gerekli düzenlemeleri paylaşmak istiyorum: 

ilk olarak firebase.js klasörümüze import olarak  import { getFirestore } from "firebase/firestore"; ve db değişkeni için ise 

const db = getFirestore();


export default db; eklememiz gerekiyor.

Tweet atma işlemlerindeki değişiklikleri ise şu şekilde düzelttim ilk olarak import satırımıza bu kodu eklememiz gerekiyor, 

import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore"; 

sonrasında ise sendTweet fonksiyonumuzu bu şekilde düzenledim:

const sendTweet = async () => {
        if (content !== '') {
            const userRef = collection(db, 'feed');

            await setDoc(doc(userRef), {
                displayName: "iksipi",
                userName: "@davsanavi",
                content,
                timestamp: serverTimestamp(),
                avatar: "https://pbs.twimg.com/profile_images/1457293343990456324/c2yR0CpQ_400x400.jpg",
                image: "https://media.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy.gif"
            }).then((result) => {
                console.log("user added!")
            }).catch((err) => {
                console.log(err)
            });;
            setContent("");
        }
    }

ve son olarak aldığımız tweetleri yazdırma kısmı kalıyor (Content.js sayfası)  import satırımıza bu kodu eklememiz gerekiyor.

import { collection, onSnapshot } from "firebase/firestore"; 

ardından ise useEffect kodumuzu bu şekilde düzenledim:

useEffect(() => {
        onSnapshot(collection(db, 'feed'), (snapshot) => {
            setTweets(snapshot.docs.map(doc => doc.data()));
        });
    }, []);

zamana göre sıralama kısmını ise FeedList'e tweets elemanlarını atarken gerçekleştirdim.

 <FeedList tweets={tweets.sort((a, b) => b.timestamp - a.timestamp)} />

 Yazarın Notu: Teşekkürler Didem, emeğine sağlık!