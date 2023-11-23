# Finder Frontend

This application simulates the MacOS system with a functional terminal that can do some below stuffs

```
      resources :folders do
        get :roots, on: :collection
        get :ls, on: :collection
      end
      resources :items do
        get :cat, on: :collection
      end
      resources :resources do
        get :find, on: :collection
        post :cr, on: :collection
        put :mv, on: :collection
        put :up, on: :collection
        delete :rm, on: :collection
      end
```

## Demo 

![image](https://github.com/sanG-github/finder-fe/assets/63148598/400954a5-f44b-4978-ac9c-896303a2133e)
