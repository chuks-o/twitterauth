import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: null
    },
    getters: {
        user (state) {
            return state.user
        }
    },
    mutations: {
        SET_USER (state, payload) {
            state.user = payload
        },
        LOGOUT (state, payload) {
            state.user = null
        }
    },
    actions: {
        autoSignIn({ commit }, payload) {
            const newUser = {
                userDetails: payload.providerData
            }
            commit('SET_USER', newUser)
        },

        signIn({ commit }) {
            var provider = new firebase.auth.TwitterAuthProvider();
            firebase.auth().signInWithRedirect(provider);
            firebase.auth().getRedirectResult().then(result => {

                // The signed-in user info.
                var user = result.user;
                commit('SET_USER', user)
            }).catch(error => {
                alert(error)
                return 
            })
        },
        logout({ commit }) {
            firebase.auth().signOut().then(function () {
                commit('LOGOUT')
            }).catch(function (error) {
                alert(error)
                return
            });

        }
    }
})