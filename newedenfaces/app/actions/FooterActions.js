/**
 * Created by Ray on 16/8/2.
 */
import alt from '../alt';

class FooterActions {
    constructor(){
        this.generateActions(
            'getTopCharactersSuccess',
            'getTopCharacersFail'
        );
    }
    // 等价与上面的this.generateActions
    // getTopCharactersSuccess(payload) {
    //     this.dispatch(payload);
    // }
    //
    // getTopCharactersFail(payload) {
    //     this.dispatch(payload);
    // }

    getTopCharacters(){
        $.ajax({url: '/api/characters/top'})
            .done((data) => {
                this.actions.getTopCharactersSuccess(data);
            })
            .fail((jqXhr) => {
                this.actions.getTopCharactersFail(jqXhr);
            });
    }
}

export default alt.createActions(FooterActions);