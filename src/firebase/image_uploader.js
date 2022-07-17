export const uploadImage = (file) => {
  const date = new Date(),
        fileName = date.getTime() + "-" + file.name,
        metadata = {
          contentType: 'image/jpeg'
        }

  var uploadTask = window.localStorage.ref().child('images/' + fileName).put(file, metadata)

  return uploadTask.then(snapshot => {
    return snapshot.ref.getDownloadURL()
  })
}

export const removeImage = function (file) {
  return window.localStorage.refFromURL(file).delete()
}





