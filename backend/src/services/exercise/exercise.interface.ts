// not needed if not using class
import type { Exercise } from "../../models/exercise.model";

export interface IExerciseService {
  findExerciseById?(id: string): Promise<Exercise | null>;
  findAllUpperExercises?(category: string): Promise<Exercise | null>;
  findAllLowerExercises?(category: string): Promise<Exercise | null>;
  findAllIsometricsExercises?(category: string): Promise<Exercise | null>;
  findAllCompoundExercises?(category: string): Promise<Exercise | null>;
  findAllMachineExercises?(category: string): Promise<Exercise | null>;
  findAllPlyometricExercises?(category: string): Promise<Exercise | null>;
  findAllCardioExercises?(category: string): Promise<Exercise | null>;
  findAllNoEquipmentExercises?(category: string): Promise<Exercise | null>;
}
