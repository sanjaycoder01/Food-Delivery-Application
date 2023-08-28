import { useState, useEffect } from 'react'
import { Menu_Api } from '../config'
export const useRestaurant = (resId) => {
  const [restaurant, setRestaurantMenu] = useState(null)

  useEffect(() => {
    getListMenu()
  }, [])

  async function getListMenu() {
    const data = await fetch(Menu_Api + resId + '&submitAction=ENTER')
    const json = await data.json()
    setRestaurantMenu(json.data)
  }

  return restaurant
}
