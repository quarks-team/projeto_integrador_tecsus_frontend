<template>


 <div class='container'>
  <h1 class="title">Alertas de Consumo</h1>

  <div class="container-powerbi">

    <h1 class="title">Energia</h1>

    <iframe src="https://app.powerbi.com/reportEmbed?reportId=d09a1c20-0c91-4b7d-a175-2e421a02cca8&autoAuth=true&ctid=cf72e2bd-7a2b-4783-bdeb-39d57b07f76f" frameborder="0"></iframe>
<h1 class="title">Água</h1>
<iframe src="https://app.powerbi.com/reportEmbed?reportId=79b27b7f-5a12-49ad-a2da-16a53fe0f40a&autoAuth=true&ctid=cf72e2bd-7a2b-4783-bdeb-39d57b07f76f" frameborder="0"></iframe>
  </div>

</div>
  </template>
<style>
@import '../assets/css/base.css';
.container-powerbi {
  margin-left: 4%;
  margin-top: 3%;
  margin-right: 4%;
  margin-bottom: 3%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.container {
  margin-left: 6%;
}

.title {
  margin-bottom: 5%;
  margin-top: 3%;
  color: #5652c7;
  font-size: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  width: 95%;
  padding: 2%;
}
table {
  box-shadow: rgba(55, 55, 133, 0.203) 0px 4px 16px, rgba(67, 67, 125, 0.082) 0px 8px 32px;
  background-color: #5652c705;
  width: 95%;
  
}

tr {
  text-align: center;
  transition-duration: 0.75s;
  font-size: 80%;
  border: 3px solid black;
}
th {
  text-align: center;
  font-size: 70%;
  color: #525151;
  width: 20%;
}
td {
  width: 20%;
  color: #525151;
  border: 1px solid rgba(0, 0, 0, 0.084);
  font-size: 85%;
  
}
tbody{
  overflow-y:scroll;  
  
  width: 100%;
}

.fora-meta {
  color: rgba(255, 0, 0, 0.635);
  font-weight: bold;
}
tbody :hover{
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  transition-duration: 0.75s;
}

.select-forn{
  min-width: 18%;
  height: 30px;
  color: #ffffff;
  border-radius: 10px;
  padding-left: 1%;
  background-color: #5652c7;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  border-color: #ffffff;
  transition-duration: 1s;
  margin-left: 1%;
  overflow-y: scroll;
}

.select-forn:hover {
  border-color: #5652c7;
}
.selects {
  margin-bottom: 2%;
}
</style>