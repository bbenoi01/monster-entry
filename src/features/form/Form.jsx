import './Form.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	updateName,
	updateSize,
	updateType,
	updateSubType,
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
	updateTraitInput,
	addTrait,
	removeTrait,
	updateNotes,
	addMonster,
} from '../../app/slices/monsterSlice';

const Form = () => {
	const {
		name,
		size,
		type,
		subType,
		alignment,
		ac,
		hp,
		speed,
		str,
		dex,
		con,
		int,
		wis,
		cha,
		savingThrows,
		skillInput,
		skills,
		vulnerabilityInput,
		vulnerabilities,
		resistanceInput,
		resistances,
		immunityInput,
		immunities,
		senseInput,
		senses,
		languageInput,
		languages,
		challenge,
		exp,
		actionInput,
		actions,
		bonusActionInput,
		bonusActions,
		legendaryActionInput,
		legendaryActions,
		mythicActionInput,
		mythicActions,
		reactionInput,
		reactions,
		traitInput,
		traits,
		notes,
	} = useSelector((state) => state.monster);
	const dispatch = useDispatch();

	const handleAdd = (prop) => {
		switch (prop) {
			case 'skill':
				dispatch(addSkill());
				dispatch(updateSkillInput(''));
				break;

			case 'vulnerability':
				dispatch(addVulnerability());
				dispatch(updateVulnerablityInput(''));
				break;

			case 'resistance':
				dispatch(addResistance());
				dispatch(updateResistanceInput(''));
				break;

			case 'immunity':
				dispatch(addImmunity());
				dispatch(updateImmunityInput(''));
				break;

			case 'sense':
				dispatch(addSense());
				dispatch(updateSenseInput(''));
				break;

			case 'language':
				dispatch(addLanguage());
				dispatch(updateLanguageInput(''));
				break;

			case 'action':
				dispatch(addAction());
				dispatch(updateActionInput(''));
				break;

			case 'bonus':
				dispatch(addBonusAction());
				dispatch(updateBonusActionInput(''));
				break;

			case 'legendary':
				dispatch(addLegendaryAction());
				dispatch(updateLegendaryActionInput(''));
				break;

			case 'mythic':
				dispatch(addMythicAction());
				dispatch(updateMythicActionInput(''));
				break;

			case 'reaction':
				dispatch(addReaction());
				dispatch(updateReactionInput(''));
				break;

			case 'trait':
				dispatch(addTrait());
				dispatch(updateTraitInput(''));
				break;

			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const monsterData = {
			name,
			size,
			type,
			...(subType && { subType }),
			alignment,
			armorClass: ac,
			hitPoints: hp,
			speed,
			strength: str,
			dexterity: dex,
			constitution: con,
			intelligence: int,
			wisdom: wis,
			charisma: cha,
			...(savingThrows && { savingThrows }),
			...(skills.length > 0 && { skills }),
			...(vulnerabilities.length > 0 && { vulnerabilities }),
			...(resistances.length > 0 && { resistances }),
			...(immunities.length > 0 && { immunities }),
			...(senses.length > 0 && { senses }),
			languages,
			challenge,
			experiencePoints: exp,
			...(actions.length > 0 && { actions }),
			...(bonusActions.length > 0 && { bonusActions }),
			...(legendaryActions.length > 0 && { legendaryActions }),
			...(mythicActions.length > 0 && { mythicActions }),
			...(reactions.length > 0 && { reactions }),
			...(traits.length > 0 && { traits }),
			...(notes && { notes }),
		};

		dispatch(addMonster(monsterData));
		document.getElementById('monster-form').reset();
	};

	return (
		<div className='container'>
			<form id='monster-form' className='row g-3' onSubmit={handleSubmit}>
				<div className='col-3'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
						type='text'
						id='name'
						className='form-control'
						onChange={(e) => dispatch(updateName(e.target.value))}
					/>
				</div>
				<div className='col-3'>
					<label htmlFor='size' className='form-label'>
						Size
					</label>
					<select
						id='size'
						className='form-select'
						onChange={(e) => dispatch(updateSize(e.target.value))}
					>
						<option defaultValue>Choose...</option>
						<option value='Tiny'>Tiny</option>
						<option value='Small'>Small</option>
						<option value='Medium'>Medium</option>
						<option value='Large'>Large</option>
						<option value='Huge'>Huge</option>
						<option value='Gargantuan'>Gargantuan</option>
					</select>
				</div>
				<div className='col-3'>
					<label htmlFor='type' className='form-label'>
						Type
					</label>
					<select
						id='type'
						className='form-select'
						onChange={(e) => dispatch(updateType(e.target.value))}
					>
						<option defaultValue>Choose...</option>
						<option value='Aberrations'>Aberrations</option>
						<option value='Beasts'>Beasts</option>
						<option value='Celestials'>Celestials</option>
						<option value='Constructs'>Constructs</option>
						<option value='Dragons'>Dragons</option>
						<option value='Elementals'>Elementals</option>
						<option value='Fey'>Fey</option>
						<option value='Fiends'>Fiends</option>
						<option value='Giants'>Giants</option>
						<option value='Humanoids'>Humanoids</option>
						<option value='Monstrosities'>Monstrosities</option>
						<option value='Oozes'>Oozes</option>
						<option value='Plants'>Plants</option>
						<option value='Undead'>Undead</option>
					</select>
				</div>
				<div className='col-3'>
					<label htmlFor='sub-type' className='form-label'>
						Sub Type
					</label>
					<input
						type='text'
						id='sub-type'
						className='form-control'
						onChange={(e) => dispatch(updateSubType(e.target.value))}
					/>
				</div>
				<div className='col-3'>
					<label htmlFor='alignment' className='form-label'>
						Alignment
					</label>
					<select
						id='alignment'
						className='form-select'
						onChange={(e) => dispatch(updateAlignment(e.target.value))}
					>
						<option defaultValue>Choose...</option>
						<option value='Lawful Good'>Lawful Good</option>
						<option value='Neutral Good'>Neutral Good</option>
						<option value='Chaotic Good'>Chaotic Good</option>
						<option value='Lawful Neutral'>Lawful Neutral</option>
						<option value='Neutral'>Neutral</option>
						<option value='Chaotic Neutral'>Chaotic Neutral</option>
						<option value='Lawful Evil'>Lawful Evil</option>
						<option value='Neutral Evil'>Neutral Evil</option>
						<option value='Chaotic Evil'>Chaotic Evil</option>
					</select>
				</div>
				<div className='col-3'>
					<label htmlFor='ac' className='form-label'>
						Armor Class
					</label>
					<input
						type='text'
						id='ac'
						className='form-control'
						onChange={(e) => dispatch(updateArmorClass(e.target.value))}
					/>
				</div>
				<div className='col-3'>
					<label htmlFor='hp' className='form-label'>
						Hit Points
					</label>
					<input
						type='text'
						id='hp'
						className='form-control'
						onChange={(e) => dispatch(updateHP(e.target.value))}
					/>
				</div>
				<div className='col-3'>
					<label htmlFor='speed' className='form-label'>
						Speed
					</label>
					<input
						type='text'
						id='speed'
						className='form-control'
						onChange={(e) => dispatch(updateSpeed(e.target.value))}
					/>
				</div>
				<div className='col-3'>
					<label htmlFor='str' className='form-label'>
						Strength
					</label>
					<input
						type='text'
						id='str'
						className='form-control'
						onChange={(e) => dispatch(updateStrength(e.target.value))}
					/>
				</div>
				<div className='col-3'>
					<label htmlFor='dex' className='form-label'>
						Dexterity
					</label>
					<input
						type='text'
						id='dex'
						className='form-control'
						onChange={(e) => dispatch(updateDexterity(e.target.value))}
					/>
				</div>
				<div className='col-3'>
					<label htmlFor='con' className='form-label'>
						Constitution
					</label>
					<input
						type='text'
						id='con'
						className='form-control'
						onChange={(e) => dispatch(updateConstitution(e.target.value))}
					/>
				</div>
				<div className='col-3'>
					<label htmlFor='int' className='form-label'>
						Intelligence
					</label>
					<input
						type='text'
						id='int'
						className='form-control'
						onChange={(e) => dispatch(updateIntelligence(e.target.value))}
					/>
				</div>
				<div className='col-4'>
					<label htmlFor='wis' className='form-label'>
						Wisdom
					</label>
					<input
						type='text'
						id='wis'
						className='form-control'
						onChange={(e) => dispatch(updateWisdom(e.target.value))}
					/>
				</div>
				<div className='col-4'>
					<label htmlFor='cha' className='form-label'>
						Charisma
					</label>
					<input
						type='text'
						id='cha'
						className='form-control'
						onChange={(e) => dispatch(updateCharisma(e.target.value))}
					/>
				</div>
				<div className='col-4'>
					<label htmlFor='saving-throws' className='form-label'>
						Saving Throws
					</label>
					<input
						type='text'
						id='saving-throws'
						className='form-control'
						onChange={(e) => dispatch(updateSavingThrows(e.target.value))}
					/>
				</div>
				<div className='col-3'>
					<label htmlFor='skill' className='form-label'>
						Skills
					</label>
					<div className='input-group'>
						<input
							type='text'
							id='skill'
							className='form-control'
							value={skillInput}
							onChange={(e) => dispatch(updateSkillInput(e.target.value))}
						/>
						<span
							className='input-group-text'
							onClick={() => handleAdd('skill')}
						>
							+
						</span>
					</div>
				</div>
				<div className='col-3'>
					<label htmlFor='vulnerability' className='form-label'>
						Vulnerabilities
					</label>
					<div className='input-group'>
						<input
							type='text'
							id='vulnerability'
							className='form-control'
							value={vulnerabilityInput}
							onChange={(e) =>
								dispatch(updateVulnerablityInput(e.target.value))
							}
						/>
						<span
							className='input-group-text'
							onClick={() => handleAdd('vulnerability')}
						>
							+
						</span>
					</div>
				</div>
				<div className='col-3'>
					<label htmlFor='resistance' className='form-label'>
						Resistances
					</label>
					<div className='input-group'>
						<input
							type='text'
							id='resistance'
							className='form-control'
							value={resistanceInput}
							onChange={(e) => dispatch(updateResistanceInput(e.target.value))}
						/>
						<span
							className='input-group-text'
							onClick={() => handleAdd('resistance')}
						>
							+
						</span>
					</div>
				</div>
				<div className='col-3'>
					<label htmlFor='immunities' className='form-label'>
						Immunities
					</label>
					<div className='input-group'>
						<input
							type='text'
							id='immunities'
							className='form-control'
							value={immunityInput}
							onChange={(e) => dispatch(updateImmunityInput(e.target.value))}
						/>
						<span
							className='input-group-text'
							onClick={() => handleAdd('immunity')}
						>
							+
						</span>
					</div>
				</div>
				<div className='col-3'>
					<div className='form-control map'>
						{skills.map((skill, index) => (
							<text
								key={`skill_${index}`}
								onClick={() => dispatch(removeSkill(skill))}
							>
								{(index ? ', ' : '') + skill}
							</text>
						))}
					</div>
				</div>
				<div className='col-3'>
					<div className='form-control map'>
						{vulnerabilities.map((vulnerability, index) => (
							<text
								key={`vulnerability_${index}`}
								onClick={() => dispatch(removeVulnerability(vulnerability))}
							>
								{(index ? ', ' : '') + vulnerability}
							</text>
						))}
					</div>
				</div>
				<div className='col-3'>
					<div className='form-control map'>
						{resistances.map((resistance, index) => (
							<text
								key={`resistance_${index}`}
								onClick={() => dispatch(removeResistance(resistance))}
							>
								{(index ? ', ' : '') + resistance}
							</text>
						))}
					</div>
				</div>
				<div className='col-3'>
					<div className='form-control map'>
						{immunities.map((immunity, index) => (
							<text
								key={`immunity_${index}`}
								onClick={() => dispatch(removeImmunity(immunity))}
							>
								{(index ? ', ' : '') + immunity}
							</text>
						))}
					</div>
				</div>
				<div className='col-6'>
					<label htmlFor='senses' className='form-label'>
						Senses
					</label>
					<div className='input-group'>
						<input
							type='text'
							id='senses'
							className='form-control'
							value={senseInput}
							onChange={(e) => dispatch(updateSenseInput(e.target.value))}
						/>
						<span
							className='input-group-text'
							onClick={() => handleAdd('sense')}
						>
							+
						</span>
					</div>
				</div>
				<div className='col-6'>
					<label htmlFor='languages' className='form-label'>
						Languages
					</label>
					<div className='input-group'>
						<input
							type='text'
							id='languages'
							className='form-control'
							value={languageInput}
							onChange={(e) => dispatch(updateLanguageInput(e.target.value))}
						/>
						<span
							className='input-group-text'
							onClick={() => handleAdd('language')}
						>
							+
						</span>
					</div>
				</div>
				<div className='col-6'>
					<div className='form-control map'>
						{senses.map((sense, index) => (
							<text
								key={`sense_${index}`}
								onClick={() => dispatch(removeSense(sense))}
							>
								{(index ? ', ' : '') + sense}
							</text>
						))}
					</div>
				</div>
				<div className='col-6'>
					<div className='form-control map'>
						{languages.map((language, index) => (
							<text
								key={`language_${index}`}
								onClick={() => dispatch(removeLanguage(language))}
							>
								{(index ? ', ' : '') + language}
							</text>
						))}
					</div>
				</div>
				<div className='col-6'>
					<label htmlFor='challenge' className='form-label'>
						Challenge
					</label>
					<input
						type='text'
						id='challenge'
						className='form-control'
						onChange={(e) => dispatch(updateChallenge(e.target.value))}
					/>
				</div>
				<div className='col-6'>
					<label htmlFor='exp' className='form-label'>
						EXP
					</label>
					<input
						type='text'
						id='exp'
						className='form-control'
						onChange={(e) => dispatch(updateEXP(e.target.value))}
					/>
				</div>
				<div className='col-3'>
					<label htmlFor='actions' className='form-label'>
						Actions
					</label>
					<div className='input-group'>
						<input
							type='text'
							id='actions'
							className='form-control'
							value={actionInput}
							onChange={(e) => dispatch(updateActionInput(e.target.value))}
						/>
						<span
							className='input-group-text'
							onClick={() => handleAdd('action')}
						>
							+
						</span>
					</div>
				</div>
				<div className='col-3'>
					<label htmlFor='bonus' className='form-label'>
						Bonus Actions
					</label>
					<div className='input-group'>
						<input
							type='text'
							id='bonus'
							className='form-control'
							value={bonusActionInput}
							onChange={(e) => dispatch(updateBonusActionInput(e.target.value))}
						/>
						<span
							className='input-group-text'
							onClick={() => handleAdd('bonus')}
						>
							+
						</span>
					</div>
				</div>
				<div className='col-3'>
					<label htmlFor='legendary' className='form-label'>
						Legendary Actions
					</label>
					<div className='input-group'>
						<input
							type='text'
							id='legendary'
							className='form-control'
							value={legendaryActionInput}
							onChange={(e) =>
								dispatch(updateLegendaryActionInput(e.target.value))
							}
						/>
						<span
							className='input-group-text'
							onClick={() => handleAdd('legendary')}
						>
							+
						</span>
					</div>
				</div>
				<div className='col-3'>
					<label htmlFor='mythic' className='form-label'>
						Mythic Actions
					</label>
					<div className='input-group'>
						<input
							type='text'
							id='mythic'
							className='form-control'
							value={mythicActionInput}
							onChange={(e) =>
								dispatch(updateMythicActionInput(e.target.value))
							}
						/>
						<span
							className='input-group-text'
							onClick={() => handleAdd('mythic')}
						>
							+
						</span>
					</div>
				</div>
				<div className='col-3'>
					<div className='form-control map'>
						{actions.map((action, index) => (
							<text
								key={`action_${index}`}
								onClick={() => dispatch(removeAction(action))}
							>
								{(index ? ', ' : '') + action}
							</text>
						))}
					</div>
				</div>
				<div className='col-3'>
					<div className='form-control map'>
						{bonusActions.map((bonus, index) => (
							<text
								key={`bonus_${index}`}
								onClick={() => dispatch(removeBonus(bonus))}
							>
								{(index ? ', ' : '') + bonus}
							</text>
						))}
					</div>
				</div>
				<div className='col-3'>
					<div className='form-control map'>
						{legendaryActions.map((legendary, index) => (
							<text
								key={`legendary_${index}`}
								onClick={() => dispatch(removeLegendary(legendary))}
							>
								{(index ? ', ' : '') + legendary}
							</text>
						))}
					</div>
				</div>
				<div className='col-3'>
					<div className='form-control map'>
						{mythicActions.map((mythic, index) => (
							<text
								key={`mythic_${index}`}
								onClick={() => dispatch(removeMythic(mythic))}
							>
								{(index ? ', ' : '') + mythic}
							</text>
						))}
					</div>
				</div>
				<div className='col-6'>
					<label htmlFor='reactions' className='form-label'>
						Reactions
					</label>
					<div className='input-group'>
						<input
							type='text'
							id='reactions'
							className='form-control'
							value={reactionInput}
							onChange={(e) => dispatch(updateReactionInput(e.target.value))}
						/>
						<span
							className='input-group-text'
							onClick={() => handleAdd('reaction')}
						>
							+
						</span>
					</div>
				</div>
				<div className='col-6'>
					<label htmlFor='traits' className='form-label'>
						Traits
					</label>
					<div className='input-group'>
						<input
							type='text'
							id='traits'
							className='form-control'
							value={traitInput}
							onChange={(e) => dispatch(updateTraitInput(e.target.value))}
						/>
						<span
							className='input-group-text'
							onClick={() => handleAdd('trait')}
						>
							+
						</span>
					</div>
				</div>
				<div className='col-6'>
					<div className='form-control map'>
						{reactions.map((reaction, index) => (
							<text
								key={`reaction_${index}`}
								onClick={() => dispatch(removeReaction(reaction))}
							>
								{(index ? ', ' : '') + reaction}
							</text>
						))}
					</div>
				</div>
				<div className='col-6'>
					<div className='form-control map'>
						{traits.map((trait, index) => (
							<text
								key={`trait_${index}`}
								onClick={() => dispatch(removeTrait(trait))}
							>
								{(index ? ', ' : '') + trait}
							</text>
						))}
					</div>
				</div>
				<div className='col-12'>
					<label htmlFor='notes' className='form-label'>
						Notes
					</label>
					<textarea
						id='notes'
						rows='3'
						className='form-control'
						onChange={(e) => dispatch(updateNotes(e.target.value))}
					/>
				</div>
				<div id='submit-container' className='col-12'>
					<button type='submit' id='submit-btn' className='btn btn-primary'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
