async function foo() {
    try {
        let container = ele("div", "container");
        let row = ele("div", "row");

        var url = "http://makeup-api.herokuapp.com/api/v1/products.json";
        var res = fetch(url);
        res.then((data) => data.json()).then((data1) => {
            console.log(data1);
            for (i = 0; i < data1.length; i++) {
                colu = [];
                colu[i] = col(data1[i].brand, data1[i].name, data1[i].price, data1[i].price_sign, data1[i].image_link, data1[i].description, data1[i].product_link);
                row.append(colu[i]);
                container.append(row);
                document.body.append(container);
            }

        })
    } catch (error) {
        console.log(error);
    }
}
    
function ele(element, classname) {
        let elem = document.createElement(element);
        elem.setAttribute("class", classname);
        return elem;
    }
    function col(brand, pname, price, pricesym, image, descrip, plink) {
        let col = ele("div", "col-lg-4 col-sm-12");
        let card = ele("div", "card");
        let cardh = ele("div", "card-header bg-info");
        let cardt = ele('h5', "card-title");
        cardt.innerHTML = pname;
        let cardb = ele("div", "card-body");
        cardb.innerHTML = `<ul>
    <li>Brand name- ${brand}</li>
    <li>Price- ${price}${pricesym}</li>
    <li>Description- ${descrip}</li><br>
    <li>product link-  <a href=${plink} target="_blank">Click Here</a></li>
    </ul>`;
        let img = document.createElement('img');
        img.setAttribute("src", image);
        img.setAttribute("alt", "product-Image");
        cardb.append(img);
        cardh.append(cardt);
        card.append(cardh, cardb);
        col.append(card);
        return col;
    }

    foo();

    /* data fetching is so slow in this link check console with these lines also some prices has no symbols!!
     // console.log(`${data1[i].brand},${data1[i].name}`);
                // console.log(`${data1[i].price} ${data1[i].price_sign}`);
                // console.log(`${data1[i].image_link},${data1[i].product_link}`);
                // console.log(`${data1[i].description}`);
            */