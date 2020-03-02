import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
  setTimeout(() => {
    reject("Timeout");
  }, 500);
});

promise
  .then(val => {
    console.log("val : " + val);
  })
  .catch(val => {
    console.log("value : " + val);
  })
  .finally(val => {
    console.log("finally Executed");
  });
