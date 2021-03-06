import * as controller from "../controllers/my-controller"

export function registerRoutesAndMiddleware(app) {
  app.set('json spaces', 2)
  app.route('/').get(controller.hello)
  app.route('/quote').get(controller.getQuote)
  app.route('/new').post(controller.newQuote)
}
