// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import LessonScreen from './LessonScreen'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : LessonScreen
})

export default createRoutes
