var textObserver = {
  onDragStart: function (event, transferData, action) {
		alert("ahoy!")
    var htmlText  = "<strong>Cabbage</strong>";
    var plainText = "Cabbage";
    transferData.data = new TransferData();
    transferData.data.addDataForFlavour("text/html",htmlText);
    transferData.data.addDataForFlavour("text/unicode",plainText);
  }
}

