export default function formData(type, elementsList) {
  switch (type) {
    default:
    case "json":
      return formDataJson(elementsList);
  }

  function formDataJson(elementList) {
    let data = {};
    elementList.forEach((item) => {
      data[item.dataset.name] = item.value;
    });
    return data;
  }
}
