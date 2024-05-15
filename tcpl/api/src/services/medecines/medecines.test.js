import {
  medecines,
  medecine,
  createMedecine,
  updateMedecine,
  deleteMedecine,
} from './medecines'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('medecines', () => {
  scenario('returns all medecines', async (scenario) => {
    const result = await medecines()

    expect(result.length).toEqual(Object.keys(scenario.medecine).length)
  })

  scenario('returns a single medecine', async (scenario) => {
    const result = await medecine({ id: scenario.medecine.one.id })

    expect(result).toEqual(scenario.medecine.one)
  })

  scenario('creates a medecine', async () => {
    const result = await createMedecine({
      input: {
        name: 'String',
        code: 'String',
        description: 'String',
        price: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.code).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.price).toEqual('String')
  })

  scenario('updates a medecine', async (scenario) => {
    const original = await medecine({
      id: scenario.medecine.one.id,
    })
    const result = await updateMedecine({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a medecine', async (scenario) => {
    const original = await deleteMedecine({
      id: scenario.medecine.one.id,
    })
    const result = await medecine({ id: original.id })

    expect(result).toEqual(null)
  })
})
