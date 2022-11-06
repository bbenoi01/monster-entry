import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import monsterApi from '../../api/monsterApi';

export const addMonster = createAsyncThunk(
	'monster/add_monster',
	async (monsterData, { rejectWithValue }) => {
		try {
			const res = await monsterApi.post('/monster', monsterData);
			return res.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const monsterSlice = createSlice({
	name: 'monster',
	initialState: {
		loading: false,
		name: '',
		size: '',
		type: '',
		subType: '',
		alignment: '',
		ac: '',
		hp: '',
		speed: '',
		str: '',
		dex: '',
		con: '',
		int: '',
		wis: '',
		cha: '',
		savingThrows: '',
		skillInput: '',
		skills: [],
		vulnerabilityInput: '',
		vulnerabilities: [],
		resistanceInput: '',
		resistances: [],
		immunityInput: '',
		immunities: [],
		senseInput: '',
		senses: [],
		languageInput: '',
		languages: [],
		challenge: '',
		exp: '',
		traitInput: '',
		traits: [],
		actionInput: '',
		actions: [],
		bonusActionInput: '',
		bonusActions: [],
		legendaryActionInput: '',
		legendaryActions: [],
		mythicActionInput: '',
		mythicActions: [],
		reactionInput: '',
		reactions: [],
		notes: '',
		monsters: null,
		errors: null,
	},
	reducers: {
		updateName: (state, action) => {
			state.name = action.payload;
		},
		updateSize: (state, action) => {
			state.size = action.payload;
		},
		updateType: (state, action) => {
			state.type = action.payload;
		},
		updateSubType: (state, action) => {
			state.subType = action.payload;
		},
		updateAlignment: (state, action) => {
			state.alignment = action.payload;
		},
		updateArmorClass: (state, action) => {
			state.ac = action.payload;
		},
		updateHP: (state, action) => {
			state.hp = action.payload;
		},
		updateSpeed: (state, action) => {
			state.speed = action.payload;
		},
		updateStrength: (state, action) => {
			state.str = action.payload;
		},
		updateDexterity: (state, action) => {
			state.dex = action.payload;
		},
		updateConstitution: (state, action) => {
			state.con = action.payload;
		},
		updateIntelligence: (state, action) => {
			state.int = action.payload;
		},
		updateWisdom: (state, action) => {
			state.wis = action.payload;
		},
		updateCharisma: (state, action) => {
			state.cha = action.payload;
		},
		updateSavingThrows: (state, action) => {
			state.savingThrows = action.payload;
		},
		updateSkillInput: (state, action) => {
			state.skillInput = action.payload;
		},
		addSkill: (state) => {
			state.skills = [...state.skills, state.skillInput];
		},
		removeSkill: (state, action) => {
			const updatedSkills = state.skills.filter(
				(skill) => skill !== action.payload
			);
			state.skills = updatedSkills;
		},
		updateVulnerablityInput: (state, action) => {
			state.vulnerabilityInput = action.payload;
		},
		addVulnerability: (state) => {
			state.vulnerabilities = [
				...state.vulnerabilities,
				state.vulnerabilityInput,
			];
		},
		removeVulnerability: (state, action) => {
			const updatedVulnerabilities = state.vulnerabilities.filter(
				(vulnerability) => vulnerability !== action.payload
			);
			state.vulnerabilities = updatedVulnerabilities;
		},
		updateResistanceInput: (state, action) => {
			state.resistanceInput = action.payload;
		},
		addResistance: (state) => {
			state.resistances = [...state.resistances, state.resistanceInput];
		},
		removeResistance: (state, action) => {
			const updatedResistances = state.resistances.filter(
				(resistance) => resistance !== action.payload
			);
			state.resistances = updatedResistances;
		},
		updateImmunityInput: (state, action) => {
			state.immunityInput = action.payload;
		},
		addImmunity: (state) => {
			state.immunities = [...state.immunities, state.immunityInput];
		},
		removeImmunity: (state, action) => {
			const updatedImmunities = state.immunities.filter(
				(immunity) => immunity !== action.payload
			);
			state.immunities = updatedImmunities;
		},
		updateSenseInput: (state, action) => {
			state.senseInput = action.payload;
		},
		addSense: (state) => {
			state.senses = [...state.senses, state.senseInput];
		},
		removeSense: (state, action) => {
			const updatedSenses = state.senses.filter(
				(sense) => sense !== action.payload
			);
			state.senses = updatedSenses;
		},
		updateLanguageInput: (state, action) => {
			state.languageInput = action.payload;
		},
		addLanguage: (state) => {
			state.languages = [...state.languages, state.languageInput];
		},
		removeLanguage: (state, action) => {
			const updatedLanguages = state.languages.filter(
				(language) => language !== action.payload
			);
			state.languages = updatedLanguages;
		},
		updateChallenge: (state, action) => {
			state.challenge = action.payload;
		},
		updateEXP: (state, action) => {
			state.exp = action.payload;
		},
		updateTraitInput: (state, action) => {
			state.traitInput = action.payload;
		},
		addTrait: (state) => {
			state.traits = [...state.traits, state.traitInput];
		},
		removeTrait: (state, action) => {
			const updatedTraits = state.traits.filter(
				(trait) => trait !== action.payload
			);
			state.traits = updatedTraits;
		},
		updateActionInput: (state, action) => {
			state.actionInput = action.payload;
		},
		addAction: (state) => {
			state.actions = [...state.actions, state.actionInput];
		},
		removeAction: (state, action) => {
			const updatedActions = state.actions.filter(
				(item) => item !== action.payload
			);
			state.actions = updatedActions;
		},
		updateBonusActionInput: (state, action) => {
			state.bonusActionInput = action.payload;
		},
		addBonusAction: (state) => {
			state.bonusActions = [...state.bonusActions, state.bonusActionInput];
		},
		removeBonus: (state, action) => {
			const updatedBonuses = state.bonusActions.filter(
				(bonus) => bonus !== action.payload
			);
			state.bonusActions = updatedBonuses;
		},
		updateLegendaryActionInput: (state, action) => {
			state.legendaryActionInput = action.payload;
		},
		addLegendaryAction: (state) => {
			state.legendaryActions = [
				...state.legendaryActions,
				state.legendaryActionInput,
			];
		},
		removeLegendary: (state, action) => {
			const updatedLegendaries = state.legendaryActions.filter(
				(legendary) => legendary !== action.payload
			);
			state.legendaryActions = updatedLegendaries;
		},
		updateMythicActionInput: (state, action) => {
			state.mythicActionInput = action.payload;
		},
		addMythicAction: (state) => {
			state.mythicActions = [...state.mythicActions, state.mythicActionInput];
		},
		removeMythic: (state, action) => {
			const updatedMythics = state.mythicActions.filter(
				(mythic) => mythic !== action.payload
			);
			state.mythicActions = updatedMythics;
		},
		updateReactionInput: (state, action) => {
			state.reactionInput = action.payload;
		},
		addReaction: (state) => {
			state.reactions = [...state.reactions, state.reactionInput];
		},
		removeReaction: (state, action) => {
			const updatedReactions = state.reactions.filter(
				(reaction) => reaction !== action.payload
			);
			state.reactions = updatedReactions;
		},
		updateNotes: (state, action) => {
			state.notes = action.payload;
		},
		clearMonsters: (state) => {
			state.monsters = null;
		},
	},
	extraReducers: {
		[addMonster.pending]: (state) => {
			state.loading = true;
			state.errors = null;
		},
		[addMonster.fulfilled]: (state, action) => {
			state.loading = false;
			state.monsters = action.payload;
		},
		[addMonster.rejected]: (state, action) => {
			state.loading = false;
			state.errors = action.payload;
		},
	},
});

export const {
	updateName,
	updateSize,
	updateType,
	updateSubType,
	clearMonsters,
	updateAlignment,
	updateArmorClass,
	updateHP,
	updateSpeed,
	updateStrength,
	updateDexterity,
	updateConstitution,
	updateIntelligence,
	updateWisdom,
	updateCharisma,
	updateSavingThrows,
	updateSkillInput,
	addSkill,
	removeSkill,
	updateVulnerablityInput,
	addVulnerability,
	removeVulnerability,
	updateResistanceInput,
	addResistance,
	removeResistance,
	updateImmunityInput,
	addImmunity,
	removeImmunity,
	updateSenseInput,
	addSense,
	removeSense,
	updateLanguageInput,
	addLanguage,
	removeLanguage,
	updateChallenge,
	updateEXP,
	updateTraitInput,
	addTrait,
	removeTrait,
	updateActionInput,
	addAction,
	removeAction,
	updateBonusActionInput,
	addBonusAction,
	removeBonus,
	updateLegendaryActionInput,
	addLegendaryAction,
	removeLegendary,
	updateMythicActionInput,
	addMythicAction,
	removeMythic,
	updateReactionInput,
	addReaction,
	removeReaction,
	updateNotes,
} = monsterSlice.actions;

export default monsterSlice.reducer;
