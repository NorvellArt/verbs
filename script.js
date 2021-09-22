function func(verb, mest) {

    if (mest == 'я') {
        if (verb.slice(-3) === 'ать') {
            return console.log(verb.slice(0, -3) + 'у')
        } else {
            return console.log(verb.slice(0, -3) + 'ю')
        }
    } else if (mest == 'мы') {
        return console.log(verb.slice(0, -3) + 'им')
    } else if (mest == 'ты') {
        return console.log(verb.slice(0, -3) + 'ишь')
    } else if (mest == 'вы') {
        return console.log(verb.slice(0, -3) + 'ите')
    } else if (mest == 'он' || mest == 'она' || mest == 'оно') {
        return console.log(verb.slice(0, -3) + 'ит')
    } else if (mest == 'они') {
        if (verb.slice(-3) === 'ать') {
            return console.log(verb.slice(0, -3) + 'ат')
        } else {
            return console.log(verb.slice(0, -3) + 'ят')
        }
    }
}
func('держать', 'я')
func('дежурить', 'я')
func('держать', 'мы')
func('дежурить', 'мы')
func('держать', 'ты')
func('дежурить', 'ты')
func('держать', 'вы')
func('дежурить', 'вы')
func('держать', 'он')
func('дежурить', 'он')
func('держать', 'она')
func('дежурить', 'она')
func('держать', 'оно')
func('дежурить', 'оно')
func('держать', 'они')
func('дежурить', 'они')