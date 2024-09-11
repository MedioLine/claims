// tests/claimsController.test.ts
import { createClaim } from '../src/controllers/claimsController';

// Sample test
describe('Claims Controller', () => {
  it('should create a claim', async () => {
    // Mock request and response objects
    const req = { body: { patientId: '123', claimAmount: 1000 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await createClaim(req as any, res as any);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalled();
  });
});
