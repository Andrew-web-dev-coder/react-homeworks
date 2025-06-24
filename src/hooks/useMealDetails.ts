import { useEffect, useState } from "react";
import type { Meal } from "types/products";

export const useMealDetails = (ids: string[]) => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const responses = await Promise.all(
          ids.map((id) =>
            fetch(`https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals/${id}`).then((res) => res.json())
          )
        );
        setMeals(responses);
      } catch (error) {
        console.error("Failed to fetch meal details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (ids.length > 0) fetchMeals();
  }, [ids]);

  return { meals, loading };
};
