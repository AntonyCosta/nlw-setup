const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
  run: ['01-01', '01-02', '01-06'],
  takePills: ['01-0e'
}

nlwSetup.setData(data)
nlwSetup.load()