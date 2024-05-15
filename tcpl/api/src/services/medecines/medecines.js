import { db } from 'src/lib/db'

export const medecines = () => {
  return db.medecine.findMany()
}

export const medecine = ({ id }) => {
  return db.medecine.findUnique({
    where: { id },
  })
}

export const createMedecine = ({ input }) => {
  return db.medecine.create({
    data: input,
  })
}

export const updateMedecine = ({ id, input }) => {
  return db.medecine.update({
    data: input,
    where: { id },
  })
}

export const deleteMedecine = ({ id }) => {
  return db.medecine.delete({
    where: { id },
  })
}
